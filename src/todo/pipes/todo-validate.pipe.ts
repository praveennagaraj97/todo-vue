import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TodoValidatePipe implements PipeTransform {
  transform(value: any, metaData: ArgumentMetadata) {
    console.log(value, metaData);
    return value;
  }
}
