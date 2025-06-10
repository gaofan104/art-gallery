import Model, { attr } from '@ember-data/model';

export default class ArtworkModel extends Model {
    @attr('string') title;
    @attr('string') image_id;
    // @attr('date') date_display;
    @attr('string') description;
}
