import assert from 'assert';
import app from '../../src/app';

describe('\'ba\' service', () => {
  it('registered the service', () => {
    const service = app.service('ba');

    assert.ok(service, 'Registered the service');
  });
});
