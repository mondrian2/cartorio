import assert from 'assert';
import app from '../../src/app';

describe('\'ap\' service', () => {
  it('registered the service', () => {
    const service = app.service('ap');

    assert.ok(service, 'Registered the service');
  });
});
