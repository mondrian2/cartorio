// Initializes the `cartorios` service on path `/cartorios`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Cartorios } from './cartorios.class';
import createModel from '../../models/cartorios.model';
import hooks from './cartorios.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'cartorios': Cartorios & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cartorios', new Cartorios(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cartorios');

  service.hooks(hooks);
}
