// Initializes the `ba` service on path `/ba`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ba } from './ba.class';
import createModel from '../../models/ba.model';
import hooks from './ba.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ba': Ba & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ba', new Ba(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ba');

  service.hooks(hooks);
}
