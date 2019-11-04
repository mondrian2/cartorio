// Initializes the `mt` service on path `/mt`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Mt } from './mt.class';
import createModel from '../../models/mt.model';
import hooks from './mt.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mt': Mt & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mt', new Mt(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mt');

  service.hooks(hooks);
}
