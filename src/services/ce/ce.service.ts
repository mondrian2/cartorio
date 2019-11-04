// Initializes the `ce` service on path `/ce`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ce } from './ce.class';
import createModel from '../../models/ce.model';
import hooks from './ce.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ce': Ce & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ce', new Ce(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ce');

  service.hooks(hooks);
}
