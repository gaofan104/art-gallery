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
        return this.get('model').meta.current_page == 1;
    }

    get isLastPage() {
        return this.get('model').meta.current_page == this.get('model').meta.total_pages;
    }

    @action
    goToPage(page) {
        // this.router.replaceWith('home', { queryParams: { page: page } });
    }

    @action
    goToPreviousPage() {
        // this.router.replaceWith('home', { queryParams: { page: this.get('model').meta.current_page - 1 } });
    }

    @action
    goToNextPage() {
        // console.log(this.get('model').meta.current_page)
        // this.router.transitionTo('home', { queryParams: { page: this.get('model').meta.current_page + 1 } });
        this.set('page', this.page + 1)
    }
}
