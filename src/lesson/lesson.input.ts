import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsDateString()
  @Field()
  startDate: string;
}
