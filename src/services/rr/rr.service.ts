// Initializes the `rr` service on path `/rr`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Rr } from './rr.class';
import createModel from '../../models/rr.model';
import hooks from './rr.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'rr': Rr & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rr', new Rr(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rr');

  service.hooks(hooks);
}
