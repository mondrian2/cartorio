// Initializes the `ma` service on path `/ma`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ma } from './ma.class';
import createModel from '../../models/ma.model';
import hooks from './ma.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ma': Ma & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ma', new Ma(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ma');

  service.hooks(hooks);
}
