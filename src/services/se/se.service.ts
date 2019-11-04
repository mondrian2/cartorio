// Initializes the `se` service on path `/se`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Se } from './se.class';
import createModel from '../../models/se.model';
import hooks from './se.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'se': Se & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/se', new Se(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('se');

  service.hooks(hooks);
}
