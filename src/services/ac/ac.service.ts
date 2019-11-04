// Initializes the `ac` service on path `/ac`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ac } from './ac.class';
import createModel from '../../models/ac.model';
import hooks from './ac.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ac': Ac & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ac', new Ac(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ac');

  service.hooks(hooks);
}
