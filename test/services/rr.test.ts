import assert from 'assert';
import app from '../../src/app';

describe('\'rr\' service', () => {
  it('registered the service', () => {
    const service = app.service('rr');

    assert.ok(service, 'Registered the service');
  });
});
