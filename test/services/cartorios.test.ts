import assert from 'assert';
import app from '../../src/app';

describe('\'cartorios\' service', () => {
  it('registered the service', () => {
    const service = app.service('cartorios');

    assert.ok(service, 'Registered the service');
  });
});
