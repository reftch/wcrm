import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  lastname?: string;
}
