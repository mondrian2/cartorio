import assert from 'assert';
import app from '../../src/app';

describe('\'df\' service', () => {
  it('registered the service', () => {
    const service = app.service('df');

    assert.ok(service, 'Registered the service');
  });
});
