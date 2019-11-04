import assert from 'assert';
import app from '../../src/app';

describe('\'to\' service', () => {
  it('registered the service', () => {
    const service = app.service('to');

    assert.ok(service, 'Registered the service');
  });
});
