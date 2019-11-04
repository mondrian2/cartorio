// Initializes the `ms` service on path `/ms`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ms } from './ms.class';
import createModel from '../../models/ms.model';
import hooks from './ms.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ms': Ms & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ms', new Ms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ms');

  service.hooks(hooks);
}
