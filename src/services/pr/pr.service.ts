// Initializes the `pr` service on path `/pr`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pr } from './pr.class';
import createModel from '../../models/pr.model';
import hooks from './pr.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pr': Pr & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pr', new Pr(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pr');

  service.hooks(hooks);
}
