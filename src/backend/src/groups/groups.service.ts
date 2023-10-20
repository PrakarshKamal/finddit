import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DbService } from 'src/db/db.service';
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
  limit,
  doc,
} from 'firebase/firestore';

@Injectable()
export class GroupsService {
  private db: Firestore;
  private groupsRef: CollectionReference;
  constructor(private readonly dbService: DbService) {
    this.db = this.dbService.getDB();
    this.groupsRef = collection(this.db, 'groups');
  }
  async create(createGroupDto: CreateGroupDto) {
    try {
      createGroupDto.groupMembersEmails.push(createGroupDto.groupAdminEmail);
      const docRef = await addDoc(this.groupsRef, {
        groupName: createGroupDto.groupName,
        groupIconID: createGroupDto.groupIconID,
        groupAdminEmail: createGroupDto.groupAdminEmail,
        groupMembersEmails: createGroupDto.groupMembersEmails,
        votingDeadline: createGroupDto.votingDeadline,
        isActive: createGroupDto.isActive,
        timeStamp: new Date()
      });
      console.log('Document written with ID: ', docRef.id);
      //TODO: Implement a function to send notification to user being added to a group
      this.addGroupMembersToGroup(
        docRef.id,
        createGroupDto.groupMembersEmails,
        createGroupDto.groupAdminEmail,
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    return `A new group with group admin: ${createGroupDto.groupAdminEmail} has been created!`;
  }

  async addGroupMembersToGroup(
    currentGroupRefID: string,
    groupMembersEmails: string[],
    groupAdminEmail: string,
  ) {
    groupMembersEmails.push(groupAdminEmail);
    for (const groupMemberEmail of groupMembersEmails) {
      var groupMemberSubCollectionRef = doc(this.groupsRef, currentGroupRefID, 'groupMembers', groupMemberEmail);
      await setDoc(groupMemberSubCollectionRef, {
        memberPreferences: {},
        memberVotes: {}, 
        memberUsedSuperDislike: false,
        memberCheckedInGroup: false,
        memberCheckinTimestamp: null
      })

    }
    return `Admin & Members have been added to group ${currentGroupRefID}!`;
  }

  async findAll() {
    const querySnapshot = await getDocs(this.groupsRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    return `This action returns all groups`;
  }

  async getActiveGroupsForUser(userEmail: string) {
    const querySnapshot = await getDocs(query(this.groupsRef, where('groupMembersEmails', 'array-contains', userEmail), where('isActive', '==', true)));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    return `This action returns all active groups for user ${userEmail}`;
  }
  
  async groupMemberCheckInToGroup(groupMemberEmail: string, currentGroupRefID: string, memberPreferences: any) {
    var groupMemberSubCollectionRef = doc(this.groupsRef, currentGroupRefID, 'groupMembers', groupMemberEmail);
    await updateDoc(groupMemberSubCollectionRef,{
      "memberCheckedInGroup": true,
      "memberCheckinTimestamp": new Date(),
      "memberPreferences": memberPreferences
    })
  }

  async getInactiveGroupsForUser(userEmail: string) {
    const querySnapshot = await getDocs(query(this.groupsRef, where('groupMembersEmails', 'array-contains', userEmail), where('isActive', '==', false), orderBy("timeStamp", "desc"), limit(5)));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}

