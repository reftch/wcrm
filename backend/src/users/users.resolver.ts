import { NotFoundException, ConflictException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUserInput } from './dto/new-user.input';
import { User } from './dto/user.model';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(returns => User)
  async addUser(@Args('input') input: NewUserInput): Promise<User> {
    let user = await this.usersService.findOneById(input.id);
    if (user) {
      throw new ConflictException(
        `User with this id: [${input.id}] already exists`,
      );
    }
    user = await this.usersService.create(input);
    return user;
  }

  @Mutation(returns => User)
  async removeUser(@Args('id') id: string) {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(
        `Unable to remove user. User with this id: [${id}] doesn't exist`,
      );
    }
    return this.usersService.remove(id);
  }
}
