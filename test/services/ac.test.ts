import assert from 'assert';
import app from '../../src/app';

describe('\'ac\' service', () => {
  it('registered the service', () => {
    const service = app.service('ac');

    assert.ok(service, 'Registered the service');
  });
});
