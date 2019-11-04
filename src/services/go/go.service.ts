// Initializes the `go` service on path `/go`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Go } from './go.class';
import createModel from '../../models/go.model';
import hooks from './go.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'go': Go & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/go', new Go(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('go');

  service.hooks(hooks);
}
