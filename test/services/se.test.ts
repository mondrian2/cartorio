import assert from 'assert';
import app from '../../src/app';

describe('\'se\' service', () => {
  it('registered the service', () => {
    const service = app.service('se');

    assert.ok(service, 'Registered the service');
  });
});
