import { InputType, Field, ID } from '@nestjs/graphql';
import { IsDateString, MinLength, IsUUID } from 'class-validator';

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

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
