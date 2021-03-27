import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserSchema } from './users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
