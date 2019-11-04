// Initializes the `pi` service on path `/pi`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pi } from './pi.class';
import createModel from '../../models/pi.model';
import hooks from './pi.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pi': Pi & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pi', new Pi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pi');

  service.hooks(hooks);
}
