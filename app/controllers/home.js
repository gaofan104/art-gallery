import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
    queryParams = ['page'];
    @service('artwork') artworkService;
    @service store;
    @service router;
    @tracked page = 1;

    get isFirstPage() {
        return this.model.meta.current_page == 1;
    }

    get isLastPage() {
        return this.model.meta.current_page == this.model.meta.total_pages;
    }

    @action
    goToPage(page) {
        this.page = page;
    }

    @action
    goToPreviousPage() {
        this.page = Math.max(1, this.page - 1);
    }

    @action
    goToNextPage() {
        this.page = Math.min(this.model.meta.total_pages, this.page + 1);
    }
}
