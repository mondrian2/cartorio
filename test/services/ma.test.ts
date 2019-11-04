import assert from 'assert';
import app from '../../src/app';

describe('\'ma\' service', () => {
  it('registered the service', () => {
    const service = app.service('ma');

    assert.ok(service, 'Registered the service');
  });
});
