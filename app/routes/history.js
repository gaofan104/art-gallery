import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class HistoryRoute extends Route {
    @service store;
    @service('artwork') artworkService;

    model() {
        return this.artworkService.history;
    }
}
