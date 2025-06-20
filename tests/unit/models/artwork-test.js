import { setupTest } from 'art-gallery/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | artwork', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('artwork', {});
    assert.ok(model, 'model exists');
  });
});
