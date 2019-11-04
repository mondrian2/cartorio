// Initializes the `am` service on path `/am`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Am } from './am.class';
import createModel from '../../models/am.model';
import hooks from './am.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'am': Am & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/am', new Am(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('am');

  service.hooks(hooks);
}
