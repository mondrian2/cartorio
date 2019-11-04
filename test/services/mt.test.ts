import assert from 'assert';
import app from '../../src/app';

describe('\'mt\' service', () => {
  it('registered the service', () => {
    const service = app.service('mt');

    assert.ok(service, 'Registered the service');
  });
});
