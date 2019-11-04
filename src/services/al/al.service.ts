// Initializes the `al` service on path `/al`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Al } from './al.class';
import createModel from '../../models/al.model';
import hooks from './al.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'al': Al & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/al', new Al(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('al');

  service.hooks(hooks);
}
