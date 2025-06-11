import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class HomeRoute extends Route {
    @service('artwork') artworkService;
    @service store;

    queryParams = {
        page: {
            refreshModel: true
        }
    };

    async model(params) {
        return  this.store.query('artwork', { page: params.page || 1, limit: 25 });
    }
}
