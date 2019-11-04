import assert from 'assert';
import app from '../../src/app';

describe('\'mg\' service', () => {
  it('registered the service', () => {
    const service = app.service('mg');

    assert.ok(service, 'Registered the service');
  });
});
