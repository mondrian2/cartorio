import assert from 'assert';
import app from '../../src/app';

describe('\'ms\' service', () => {
  it('registered the service', () => {
    const service = app.service('ms');

    assert.ok(service, 'Registered the service');
  });
});
