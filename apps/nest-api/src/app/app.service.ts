import { Injectable } from '@nestjs/common';
import {printSum} from '@stores/number-utils'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to nest-api! ' + printSum([1,2,3]) };
  }
}
