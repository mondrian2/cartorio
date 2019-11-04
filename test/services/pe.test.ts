import assert from 'assert';
import app from '../../src/app';

describe('\'pe\' service', () => {
  it('registered the service', () => {
    const service = app.service('pe');

    assert.ok(service, 'Registered the service');
  });
});
