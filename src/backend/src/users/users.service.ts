import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import {
  Firestore,
  collection,
  addDoc,
  CollectionReference,
  getDocs,
  query,
  where,
  or,
  deleteDoc,
  doc
} from 'firebase/firestore';

@Injectable()
export class UsersService {
  private db: Firestore;
  private usersRef: CollectionReference;
  constructor(private readonly dbService: DbService) {
    this.db = this.dbService.getDB();
    this.usersRef = collection(this.db, 'users');
  }
  async create(createUserDto: CreateUserDto) {
    try {
      const docRef = await addDoc(collection(this.db, 'users'), {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    return `A new user with email ID: ${createUserDto.email} has been created!`;
  }

  async findAll() {
    const querySnapshot = await getDocs(this.usersRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    return `This action returns all users`;
  }

  async findOne(email_id: string) {
    try {
      const queryToFindUserByEmail = query(
        this.usersRef,
        where('email', '==', email_id),
      );
      const querySnapshot = await getDocs(queryToFindUserByEmail);
      if (querySnapshot.empty) {
        return 'No user found with that email ID!';
      }
      const userData = querySnapshot.docs[0].data();
      return new CreateUserDto(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.iconID
      );
    } catch (e) {
      console.error('Error finding document: ', e);
    }
  }

  async findByName(name: string) {
    try {
      const userList: CreateUserDto[] = [];
      const queryFindUserByName = query(
        this.usersRef,
        or(
        where('firstName', '==', name ),
        where('lastName', '==', name))
        );
      const querySnapshot = await getDocs(queryFindUserByName);
      if (querySnapshot.empty) {
        return 'No user found with that name!';
      }
      for (const doc of querySnapshot.docs) {
        const userData = doc.data();
        userList.push(new CreateUserDto(
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.iconID
        ));
      }
      const userData = querySnapshot.docs[0].data();
      return userList;
    } catch (e) {
      console.error('Error finding document: ', e);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(email: string) {
    try {
    await deleteDoc(doc(this.usersRef, email));
    return `User with the email: #${email} was removed successfully!`;
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  }
}
