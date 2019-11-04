// Initializes the `ap` service on path `/ap`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ap } from './ap.class';
import createModel from '../../models/ap.model';
import hooks from './ap.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ap': Ap & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ap', new Ap(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ap');

  service.hooks(hooks);
}
