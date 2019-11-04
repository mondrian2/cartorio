import assert from 'assert';
import app from '../../src/app';

describe('\'rs\' service', () => {
  it('registered the service', () => {
    const service = app.service('rs');

    assert.ok(service, 'Registered the service');
  });
});
