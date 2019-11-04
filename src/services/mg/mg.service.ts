// Initializes the `mg` service on path `/mg`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Mg } from './mg.class';
import createModel from '../../models/mg.model';
import hooks from './mg.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mg': Mg & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mg', new Mg(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mg');

  service.hooks(hooks);
}
