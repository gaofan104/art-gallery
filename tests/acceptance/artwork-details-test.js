import { click, currentURL, fillIn, visit, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'art-gallery/tests/helpers';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | artwork-details', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('artwork details page should render correctly', async function (assert) {
        await visit('/artwork-details/1');
        assert.dom('[class="title"]').hasText('Compote');
        assert.dom('[class="artist"]').hasText('Artist: Isadore V. Friedman (American, born Kyiv, Russian Empire, now Ukraine, 1885–1956) Chicago');
    });

    test('artwork details page add/remove favorite button should work', async function (assert) {
        await visit('/artwork-details/1');
        await click('a[class="material-symbols-outlined"]');
        assert.dom('a[class="material-symbols-outlined red"]').hasText('favorite');
    });
});