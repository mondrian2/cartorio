import assert from 'assert';
import app from '../../src/app';

describe('\'ce\' service', () => {
  it('registered the service', () => {
    const service = app.service('ce');

    assert.ok(service, 'Registered the service');
  });
});
