// Initializes the `ro` service on path `/ro`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ro } from './ro.class';
import createModel from '../../models/ro.model';
import hooks from './ro.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ro': Ro & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ro', new Ro(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ro');

  service.hooks(hooks);
}
