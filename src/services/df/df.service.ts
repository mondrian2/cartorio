// Initializes the `df` service on path `/df`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Df } from './df.class';
import createModel from '../../models/df.model';
import hooks from './df.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'df': Df & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/df', new Df(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('df');

  service.hooks(hooks);
}
