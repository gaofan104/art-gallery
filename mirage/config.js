import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://api.artic.edu';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api/v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */

  this.get('/artworks/:id', () => {
    return {
      "data": {
        "id": 271883,
        "api_model": "artworks",
        "api_link": "https:\/\/api.artic.edu\/api\/v1\/artworks\/271883",
        "is_boosted": false,
        "title": "Compote",
        "alt_titles": [],
        "thumbnail": {
          "lqip": "data:image\/gif;base64,R0lGODlhBAAFAPQAAIWEhIeGhoqJiYqJipOSkZOSkpiXmZqam52bmJ2bmZ2cmZ2cm56cmp6dm5ybnKuqqqurq6yrq6urrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYDAMQcEghcEwh4MgjhQ9TwgAOw==",
          "width": 4955,
          "height": 6607,
          "alt_text": "A work made of silver."
        },
        "main_reference_number": "2023.3035",
        "has_not_been_viewed_much": true,
        "boost_rank": null,
        "date_start": 1900,
        "date_end": 1908,
        "date_display": "1900\u201308",
        "date_qualifier_title": "",
        "date_qualifier_id": null,
        "artist_display": "Isadore V. Friedman (American, born Kyiv, Russian Empire, now Ukraine, 1885\u20131956)\nChicago",
        "place_of_origin": "Chicago",
        "description": null,
        "short_description": null,
        "dimensions": "16.2 \u00d7 19 \u00d7 19.2 cm (6 7\/16 \u00d7 7 1\/2 \u00d7 7 9\/16 in.)",
        "dimensions_detail": [
          {
            "depth": 19,
            "width": 19,
            "height": 16,
            "diameter": null,
            "clarification": null
          }
        ],
        "medium_display": "Silver",
        "inscriptions": "Monogram applied base top: \"E H. Stamped bottom, left: HULL-HOUSE SHOPS \/ HAND WROUGHT \/ I V F [Isadore V. Friedman pitcher hallmark] \/ STERLING\"; inscribed bottom, bottom, in red marker: \"S1991.01\".",
        "credit_line": "Arts of the Americas Discretionary Fund",
        "catalogue_display": null,
        "publication_history": "W. Scott Braznell, \"The Influence of C. R. Ashbee and his Guild of the Handicraft on American Silver, Other Metalwork, and Jewelry,\" in Bert Denker, ed., <em>The Substance of Style<\/em> (Winterthur, DE: The Henry Francis du Pont Winterthur Museum, 1996), 31 (ill.).",
        "exhibition_history": null,
        "provenance_text": "With Ark Antiques, La Jolla, CA, by 1991 [this and the following according to email from Spencer Gordon, Nov. 14, 2023; copy in curatorial object file]; sold to private collection, 1991; sold to Spencer Marks, Ltd., Southampton, MA, Nov. 16, 2023; sold to the Art Institute of Chicago, 2023.",
        "edition": null,
        "publishing_verification_level": "Web Everything",
        "internal_department_id": 21,
        "fiscal_year": 2023,
        "fiscal_year_deaccession": null,
        "is_public_domain": false,
        "is_zoomable": false,
        "max_zoom_window_size": 843,
        "copyright_notice": null,
        "has_multimedia_resources": false,
        "has_educational_resources": false,
        "has_advanced_imaging": false,
        "colorfulness": 0,
        "color": {
          "h": 344,
          "l": 65,
          "s": 0,
          "percentage": 0.009557792495101594,
          "population": 3129
        },
        "latitude": null,
        "longitude": null,
        "latlon": null,
        "is_on_view": false,
        "on_loan_display": null,
        "gallery_title": null,
        "gallery_id": null,
        "nomisma_id": null,
        "artwork_type_title": "Metalwork",
        "artwork_type_id": 35,
        "department_title": "Arts of the Americas",
        "department_id": "PC-3",
        "artist_id": 118966,
        "artist_title": "Isadore V. Friedman",
        "alt_artist_ids": [],
        "artist_ids": [
          118966
        ],
        "artist_titles": [
          "Isadore V. Friedman"
        ],
        "category_ids": [
          "PC-3"
        ],
        "category_titles": [
          "Arts of the Americas"
        ],
        "term_titles": [
          "compote",
          "silver",
          "silver",
          "silversmithing",
          "Arts and Crafts Movement",
          "bowl",
          "american decorative arts",
          "decorative arts",
          "appliqu\u00e9 (technique)",
          "hammering",
          "20th Century",
          "Chicago art center"
        ],
        "style_id": "TM-7569",
        "style_title": "Arts and Crafts Movement",
        "alt_style_ids": [
          "TM-13130",
          "TM-15495"
        ],
        "style_ids": [
          "TM-7569",
          "TM-13130",
          "TM-15495"
        ],
        "style_titles": [
          "Arts and Crafts Movement",
          "20th Century",
          "Chicago art center"
        ],
        "classification_id": "TM-161",
        "classification_title": "silver",
        "alt_classification_ids": [
          "TM-2190",
          "TM-1678"
        ],
        "classification_ids": [
          "TM-161",
          "TM-2190",
          "TM-1678"
        ],
        "classification_titles": [
          "silver",
          "american decorative arts",
          "decorative arts"
        ],
        "subject_id": "TM-15496",
        "alt_subject_ids": [
          "TM-13690"
        ],
        "subject_ids": [
          "TM-15496",
          "TM-13690"
        ],
        "subject_titles": [
          "compote",
          "bowl"
        ],
        "material_id": "TM-2436",
        "alt_material_ids": [],
        "material_ids": [
          "TM-2436"
        ],
        "material_titles": [
          "silver"
        ],
        "technique_id": "TM-4158",
        "alt_technique_ids": [
          "TM-3915",
          "TM-4174"
        ],
        "technique_ids": [
          "TM-4158",
          "TM-3915",
          "TM-4174"
        ],
        "technique_titles": [
          "silversmithing",
          "appliqu\u00e9 (technique)",
          "hammering"
        ],
        "theme_titles": [],
        "image_id": "23795223-2b38-bf1f-dae1-384928f70c6e",
        "alt_image_ids": [
          "ed3cc1b6-7aa2-2b2b-6821-31d028c888d9",
          "7be30b61-ef80-c421-2deb-ad48e74632d1",
          "cdf97aeb-b524-639e-d437-189914c15d9c",
          "35874275-7d80-f53b-6618-23cbb4339458"
        ],
        "document_ids": [],
        "sound_ids": [],
        "video_ids": [],
        "text_ids": [],
        "section_ids": [],
        "section_titles": [],
        "site_ids": [],
        "suggest_autocomplete_all": [
          {
            "input": [
              "2023.3035"
            ],
            "contexts": {
              "groupings": [
                "accession"
              ]
            }
          },
          {
            "input": [
              "Compote"
            ],
            "weight": 1,
            "contexts": {
              "groupings": [
                "title"
              ]
            }
          }
        ],
        "source_updated_at": "2025-01-16T11:53:34-06:00",
        "updated_at": "2025-06-11T13:35:16-05:00",
        "timestamp": "2025-06-11T14:55:51-05:00"
      },
      "info": {
        "license_text": "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
        "license_links": [
          "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
          "https:\/\/www.artic.edu\/terms"
        ],
        "version": "1.13"
      },
      "config": {
        "iiif_url": "https:\/\/www.artic.edu\/iiif\/2",
        "website_url": "http:\/\/www.artic.edu"
      }
    }
  });
}
