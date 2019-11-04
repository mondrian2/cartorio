// Initializes the `rj` service on path `/rj`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Rj } from './rj.class';
import createModel from '../../models/rj.model';
import hooks from './rj.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'rj': Rj & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rj', new Rj(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rj');

  service.hooks(hooks);
}
