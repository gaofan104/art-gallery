import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ArtworkDetailsRoute extends Route {
    @service store;
    @service('artwork') artworkService;

    model(params) {
        return this.store.findRecord('artwork', params.id);
    }

    @action
    didTransition() {
        this.artworkService.addHistory(this.controller.model);
    }
}
