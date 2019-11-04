import assert from 'assert';
import app from '../../src/app';

describe('\'rn\' service', () => {
  it('registered the service', () => {
    const service = app.service('rn');

    assert.ok(service, 'Registered the service');
  });
});
