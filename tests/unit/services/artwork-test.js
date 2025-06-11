import { module, test } from 'qunit';
import { setupTest } from 'art-gallery/tests/helpers';

const mockArtwork = {
  id: "123",
  title: "Compote",
  artist: "Isadore V. Friedman (American, born Kyiv, Russian Empire, now Ukraine, 1885–1956) Chicago",
  description: ""
}

module('Unit | Service | artwork', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:artwork');
    assert.ok(service);
  });

  test('addFavorite method should work', function (assert) {
    let service = this.owner.lookup('service:artwork');
    service.addFavorite(mockArtwork)
    assert.deepEqual(service.favorites, [mockArtwork]);
  })

  test('removeFavorite method should work', function (assert) {
    let service = this.owner.lookup('service:artwork');
    service.favorites = [mockArtwork];
    service.removeFavorite(mockArtwork);
    assert.equal(service.favorites.length, 0);
  })

  test('addHistory method should work', function (assert) {
    let service = this.owner.lookup('service:artwork');
    service.addHistory(mockArtwork)
    assert.deepEqual(service.history, [mockArtwork]);
  })

  test('removeHistory method should work', function (assert) {
    let service = this.owner.lookup('service:artwork');
    service.history = [mockArtwork];
    service.removeHistory(mockArtwork);
    assert.equal(service.history.length, 0);
  })
});
