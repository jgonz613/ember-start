import { module, test } from 'qunit';
import { setupTest } from 'ember-start/tests/helpers';

module('Unit | Route | not-found', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:not-found');
    assert.ok(route);
  });
});
