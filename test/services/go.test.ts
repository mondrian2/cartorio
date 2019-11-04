import assert from 'assert';
import app from '../../src/app';

describe('\'go\' service', () => {
  it('registered the service', () => {
    const service = app.service('go');

    assert.ok(service, 'Registered the service');
  });
});
