import assert from 'assert';
import app from '../../src/app';

describe('\'rj\' service', () => {
  it('registered the service', () => {
    const service = app.service('rj');

    assert.ok(service, 'Registered the service');
  });
});
