// Initializes the `sc` service on path `/sc`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Sc } from './sc.class';
import createModel from '../../models/sc.model';
import hooks from './sc.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sc': Sc & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sc', new Sc(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sc');

  service.hooks(hooks);
}
