import { Expose } from 'class-transformer';

export class TaskDto {
  @Expose()
  name: string;

  // @Expose()
  // description: string;

  @Expose({ name: 'test' })
  get thisIsATest(): string {
    return 'yolo';
  }
}
