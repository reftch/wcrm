import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class User extends Document {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field()
  creationDate: Date;
}
