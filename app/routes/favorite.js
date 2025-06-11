import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FavoriteRoute extends Route {
    @service store;
    @service('artwork') artworkService;

    model() {
        return this.artworkService.favorites.reduce((categories, artwork) => {
            if (!categories.has(artwork.category)) {
                categories.set(artowrk.category, []);
            }
            categories.get(artwork.category).push(artwork);
            return categories;
        }, new Map());
    }
}
