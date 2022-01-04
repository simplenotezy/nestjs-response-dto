import { Expose } from 'class-transformer';

export class TaskDto {
  @Expose()
  name: string;

  // @Expose()
  // description: string;

  @Expose()
  get thisIsATest(): string {
    return 'yolo';
  }
}
