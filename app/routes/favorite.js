import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FavoriteRoute extends Route {
    @service store;
    @service('artwork') artworkService;

    model() {
        // group artwork by categories
        return this.artworkService.favorites.reduce((categories, artwork) => {
            artwork.category_titles.forEach((category) => {
                if (!categories.has(category)) {
                    categories.set(category, []);
                }
                categories.get(category).push(artwork);
            })
            return categories;
        }, new Map());
    }
}
