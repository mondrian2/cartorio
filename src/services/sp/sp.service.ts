// Initializes the `sp` service on path `/sp`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Sp } from './sp.class';
import createModel from '../../models/sp.model';
import hooks from './sp.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sp': Sp & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sp', new Sp(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sp');

  service.hooks(hooks);
}
