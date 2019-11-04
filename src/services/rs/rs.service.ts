// Initializes the `rs` service on path `/rs`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Rs } from './rs.class';
import createModel from '../../models/rs.model';
import hooks from './rs.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'rs': Rs & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rs', new Rs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rs');

  service.hooks(hooks);
}
