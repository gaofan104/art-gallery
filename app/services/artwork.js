import Service from '@ember/service';
import { service } from '@ember/service';
import { TrackedArray } from 'tracked-built-ins';

export default class ArtworkService extends Service {
    @service store;

    favorites = new TrackedArray([]); // temporary stored in memory for demo purpose
    history = new TrackedArray([]);

    async fetchArtworks(page=1, limit=25) {
        this.store.unloadAll('artwork');
        const response = await this.store.query('artwork', {page: page, limit: limit});
        return response;
    }

    addFavorite(item) {
        this.favorites.push(item);

    }

    removeFavorite(item) {
        this.favorites.splice(this.favorites.indexOf(item), 1);
    }

    addHistory(item) {
        this.history.push(item);
    }

    removeHistory(item) {
        this.history.splice(this.history.indexOf(item), 1);
    }
}
