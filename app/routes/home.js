import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { hash } from 'rsvp';

export default class HomeRoute extends Route {
    @service('artwork') artworkService;
    @service store;

    queryParams = {
        page: {
            refreshModel: true
        }
    };

    model(params) {
        console.log(params)
        // const response = await this.artworkService.fetchArtworks();
        return this.store.query('artwork', { page: params.page || 1, limit: 25 });
        // return hash({
        //     artworks: artworks,
        //     meta: artworks.meta
        // })
    }
}
