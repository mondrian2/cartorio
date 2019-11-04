import assert from 'assert';
import app from '../../src/app';

describe('\'pa\' service', () => {
  it('registered the service', () => {
    const service = app.service('pa');

    assert.ok(service, 'Registered the service');
  });
});
