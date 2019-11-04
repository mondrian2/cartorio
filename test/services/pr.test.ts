import assert from 'assert';
import app from '../../src/app';

describe('\'pr\' service', () => {
  it('registered the service', () => {
    const service = app.service('pr');

    assert.ok(service, 'Registered the service');
  });
});
