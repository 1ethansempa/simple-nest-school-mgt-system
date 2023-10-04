/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { LessonType } from 'src/lesson/lesson.type';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

@Resolver((of) => LessonType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }
}
