import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (!Array.isArray(payload.data)) {
      let attributes = {}
      let element = payload.data
      for (let key in element) {
        attributes[key] = element[key];
        delete element[key]
      }
      element.attributes = attributes;
      element.id = element.attributes.id;
      element.type = primaryModelClass.modelName;
      return payload;
    }
    payload.data.forEach(element => {
      // element.attributes = {}
      let attributes = {}
      for (let key in element) {
        attributes[key] = element[key];
        delete element[key]
      }
      element.attributes = attributes;
      element.id = element.attributes.id;
      element.type = primaryModelClass.modelName;
    })
    payload.meta = payload.pagination;
    delete payload.pagination;
    return payload;
  }
};