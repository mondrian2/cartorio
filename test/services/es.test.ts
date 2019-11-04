import assert from 'assert';
import app from '../../src/app';

describe('\'es\' service', () => {
  it('registered the service', () => {
    const service = app.service('es');

    assert.ok(service, 'Registered the service');
  });
});
