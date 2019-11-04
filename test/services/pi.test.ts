import assert from 'assert';
import app from '../../src/app';

describe('\'pi\' service', () => {
  it('registered the service', () => {
    const service = app.service('pi');

    assert.ok(service, 'Registered the service');
  });
});
