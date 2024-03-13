import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import {
  Firestore,
  collection,
  addDoc,
  setDoc,
  CollectionReference,
  DocumentReference,
  getDocs,
  query,
  where,
  or,
  deleteDoc,
  updateDoc,
  orderBy,
  getDoc,
  limit,
  doc,
  increment,
  onSnapshot,
} from 'firebase/firestore';
import e from 'express';

const median = (arr) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const distanceBetweenTwoPoints = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

@Injectable()
export class LeaderboardService {
  private db: Firestore;
  private groupsRef: CollectionReference;
  constructor(private readonly dbService: DbService) {
    this.db = this.dbService.getDB();
    this.groupsRef = collection(this.db, 'groups');
  }

  async calculateUserMedian(currentGroupRefID, context) {
    var values = [];
    const querySnapshot = await getDocs(
      collection(this.groupsRef, currentGroupRefID, 'groupMembers'),
    );
    querySnapshot.forEach((doc) => {
      if (context == 'price') {
        values.push(doc.data().memberPreferences.maxPrice);
      } else if (context == 'distance') {
        values.push(doc.data().memberPreferences.travelRadius);
      }
    });
    return median(values);
  }

  async calculateAllRestaurantRightSwipeScores(
    restaurantData,
    userPriceMedian,
    userDistanceMedian,
    restaurantDistancesFromAdmin,
  ) {
    const rightScoreMap = {};
    for (let i = 0; i < restaurantData.length; i++) {
      const score = await this.calculateRestaurantRightSwipeScoreHelper(
        restaurantData[i],
        restaurantDistancesFromAdmin[i],
        userPriceMedian,
        userDistanceMedian,
      );
      rightScoreMap[restaurantData[i]['place_id']] = score;
    }

    return rightScoreMap;
  }

  async calculateAllRestaurantLeftSwipeScores(
    restaurantData,
    userPriceMedian,
    userDistanceMedian,
    restaurantDistancesFromAdmin,
  ) {
    const leftScoreMap = {};
    for (let i = 0; i < restaurantData.length; i++) {
      const score = await this.calculateRestaurantLeftSwipeScoreHelper(
        restaurantData[i],
        restaurantDistancesFromAdmin[i],
        userPriceMedian,
        userDistanceMedian,
      );
      leftScoreMap[restaurantData[i]['place_id']] = score;
    }
    return leftScoreMap;
  }

  async updateRightSwipeScoresInDatabase(currentGroupRefID, rightScoreMap) {
    for (var key in rightScoreMap) {
      var voteRestaurantDocRef = doc(
        this.groupsRef,
        currentGroupRefID,
        'groupVotes',
        key,
      );

      try {
        await updateDoc(voteRestaurantDocRef, {
          rightSwipeScore: rightScoreMap[key],
        });
      } catch (e) {
        await setDoc(voteRestaurantDocRef, {
          rightSwipeScore: rightScoreMap[key],
        });
      }
    }
  }
  async updateLeftSwipeScoresInDatabase(currentGroupRefID, leftScoreMap) {
    for (var key in leftScoreMap) {
      var voteRestaurantDocRef = doc(
        this.groupsRef,
        currentGroupRefID,
        'groupVotes',
        key,
      );
      try {
        await updateDoc(voteRestaurantDocRef, {
          leftSwipeScore: leftScoreMap[key],
        });
      } catch (e) {
        await setDoc(voteRestaurantDocRef, {
          leftSwipeScore: leftScoreMap[key],
        });
      }
    }
  }

  async calculateRestaurantRightSwipeScoreHelper(
    data,
    resDistance,
    userPriceMedian,
    userDistanceMedian,
  ) {
    const multiplier = 10;
    var distVar = resDistance - userDistanceMedian; // TODO
    const priceVar = Math.abs(data['price_level'] - userPriceMedian);
    const rating = data['rating'];

    if (distVar < 0) {
      distVar = 0;
    }
    const rightSwipeScore = (multiplier * rating) / (distVar + priceVar);

    return rightSwipeScore;
  }

  async calculateRestaurantLeftSwipeScoreHelper(
    data,
    resDistance,
    userPriceMedian,
    userDistanceMedian,
  ) {
    const multiplier = 10;
    var distVar = resDistance - userDistanceMedian; // TODO
    const priceVar = Math.abs(data['price_level'] - userPriceMedian);
    const rating = data['rating'];

    if (distVar < 0) {
      distVar = 0;
    }
    const leftSwipeScore = (multiplier * (distVar + priceVar)) / rating;

    return leftSwipeScore;
  }

  async calculateDistanceBetweenAdminAndRestaurant(
    adminLat,
    adminLng,
    restaurantLat,
    restaurantLng,
  ) {
    return distanceBetweenTwoPoints(
      adminLat,
      adminLng,
      restaurantLat,
      restaurantLng,
    );
  }

  async getAdminAndRestaurantLocation(currentGroupRefID, restaurantData) {
    const groupData = await getDoc(doc(this.groupsRef, currentGroupRefID));
    const groupDataObj = groupData.data();
    const adminLat = groupDataObj['adminPreferences']['latitude'];
    const adminLng = groupDataObj['adminPreferences']['longitude'];
    var restaurantDistanceFromCenter = [];
    for (let i = 0; i < restaurantData.length; i++) {
      const restaurantLat = restaurantData[i]['lat'];
      const restaurantLng = restaurantData[i]['long'];
      const distance = await this.calculateDistanceBetweenAdminAndRestaurant(
        adminLat,
        adminLng,
        restaurantLat,
        restaurantLng,
      );
      restaurantDistanceFromCenter.push(distance);
    }
    return restaurantDistanceFromCenter;
  }

  async calculateTotalWeightedScoreForRestaurant() {}
  create(createLeaderboardDto: CreateLeaderboardDto) {
    return 'This action adds a new leaderboard';
  }

  findAll() {
    return `This action returns all leaderboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaderboard`;
  }

  update(id: number, updateLeaderboardDto: UpdateLeaderboardDto) {
    return `This action updates a #${id} leaderboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaderboard`;
  }
}
