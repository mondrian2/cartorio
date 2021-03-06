// Initializes the `pa` service on path `/pa`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pa } from './pa.class';
import createModel from '../../models/pa.model';
import hooks from './pa.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pa': Pa & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pa', new Pa(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pa');

  service.hooks(hooks);
}
