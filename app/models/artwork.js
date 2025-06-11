import Model, { attr } from '@ember-data/model';

export default class ArtworkModel extends Model {
    @attr('string') title;
    @attr('string') image_id;
    @attr('array') category_titles;
    @attr('string') description;
    @attr('string') artist_display;
    @attr('date') timestamp;
}
