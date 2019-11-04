import assert from 'assert';
import app from '../../src/app';

describe('\'ro\' service', () => {
  it('registered the service', () => {
    const service = app.service('ro');

    assert.ok(service, 'Registered the service');
  });
});
