// Initializes the `rn` service on path `/rn`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Rn } from './rn.class';
import createModel from '../../models/rn.model';
import hooks from './rn.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'rn': Rn & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rn', new Rn(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rn');

  service.hooks(hooks);
}
