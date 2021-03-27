import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
})
export class AppModule {}
