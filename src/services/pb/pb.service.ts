// Initializes the `pb` service on path `/pb`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pb } from './pb.class';
import createModel from '../../models/pb.model';
import hooks from './pb.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pb': Pb & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pb', new Pb(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pb');

  service.hooks(hooks);
}
