import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.forEach(element => {
      // element.attributes = {}
      let attributes = {}
      for(let key in element){
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