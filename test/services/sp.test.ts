import assert from 'assert';
import app from '../../src/app';

describe('\'sp\' service', () => {
  it('registered the service', () => {
    const service = app.service('sp');

    assert.ok(service, 'Registered the service');
  });
});
