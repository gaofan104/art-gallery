import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ArtworkDetailsController extends Controller {
    @service('artwork') artworkService;

    get isFavorite() {
        return this.artworkService.favorites.filter(artwork => artwork.id === this.model.id).length > 0;
    }

    @action
    addToFavorite() {
        this.artworkService.addFavorite(this.model);
    }
}
