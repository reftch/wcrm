import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { User } from './dto/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(data: NewUserInput): Promise<User> {
    const createdUser = new this.userModel(data);
    createdUser.creationDate = new Date();
    return await createdUser.save();
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne({ id: id });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOneById(id);
    if (user) {
      await this.userModel.deleteOne({ id: id });
    }
    return user;
  }
}
