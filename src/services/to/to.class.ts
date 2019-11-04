import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

export class To extends Service {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
};
