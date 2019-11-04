import assert from 'assert';
import app from '../../src/app';

describe('\'al\' service', () => {
  it('registered the service', () => {
    const service = app.service('al');

    assert.ok(service, 'Registered the service');
  });
});
