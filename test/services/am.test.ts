import assert from 'assert';
import app from '../../src/app';

describe('\'am\' service', () => {
  it('registered the service', () => {
    const service = app.service('am');

    assert.ok(service, 'Registered the service');
  });
});
