import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { Firestore, collection, addDoc } from 'firebase/firestore';

@Injectable()
export class UsersService {
  private db: Firestore;
  constructor(private readonly dbService: DbService) {
    this.db = this.dbService.getDB();
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
