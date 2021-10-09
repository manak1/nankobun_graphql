import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsString, Matches } from 'class-validator';
import { validationMessages } from '../../scripts/validationMessage';

@InputType()
export class CreateSindanInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  author: string;

  @Field()
  @IsInt({ message: validationMessages.height })
  height: number;

  @Field()
  @IsString()
  @Matches(
    '[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]',
    '',
    { message: validationMessages.emoji },
  )
  emoji: string;

  @Field()
  @IsString()
  unit: string;
}
