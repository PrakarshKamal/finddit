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
  ) {
    const rightScoreMap = {};
    for (let i = 0; i < restaurantData.length; i++) {
      const score = await this.calculateRestaurantRightSwipeScoreHelper(
        restaurantData[i],
        userPriceMedian,
        userDistanceMedian,
      );
      rightScoreMap[restaurantData[i]['place_id']] = score;
    }

    return rightScoreMap;
    //TODO call function to add this to database
  }

  async calculateAllRestaurantLeftSwipeScores(
    restaurantData,
    userPriceMedian,
    userDistanceMedian,
  ) {
    const leftScoreMap = {};
    for (let i = 0; i < restaurantData.length; i++) {
      const score = await this.calculateRestaurantLeftSwipeScoreHelper(
        restaurantData[i],
        userPriceMedian,
        userDistanceMedian,
      );
      leftScoreMap[restaurantData[i]['place_id']] = score;
    }
    return leftScoreMap;
  }

  async updateRightSwipeScoresInDatabase(currentGroupRefID, rightScoreMap) {
    console.log('rightScoreMap', rightScoreMap);
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
    console.log('leftscoremaps', leftScoreMap);
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
    userPriceMedian,
    userDistanceMedian,
  ) {
    const multiplier = 10;
    var distVar = 100 - userDistanceMedian; // TODO

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
    userPriceMedian,
    userDistanceMedian,
  ) {
    const multiplier = 10;
    var distVar = 100 - userDistanceMedian; // TODO
    const priceVar = Math.abs(data['price_level'] - userPriceMedian);
    const rating = data['rating'];

    if (distVar < 0) {
      distVar = 0;
    }
    const leftSwipeScore = (multiplier * (distVar + priceVar)) / rating;

    return leftSwipeScore;
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
