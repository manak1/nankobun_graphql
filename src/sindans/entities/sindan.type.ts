import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Sindan')
export class SindanType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  author: string;

  @Field()
  createdAt: string;

  @Field()
  height: number;

  @Field()
  emoji: string;

  @Field()
  unit: string;
}
