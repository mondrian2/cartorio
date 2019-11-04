import assert from 'assert';
import app from '../../src/app';

describe('\'pb\' service', () => {
  it('registered the service', () => {
    const service = app.service('pb');

    assert.ok(service, 'Registered the service');
  });
});
