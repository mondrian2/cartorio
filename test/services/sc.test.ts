import assert from 'assert';
import app from '../../src/app';

describe('\'sc\' service', () => {
  it('registered the service', () => {
    const service = app.service('sc');

    assert.ok(service, 'Registered the service');
  });
});
