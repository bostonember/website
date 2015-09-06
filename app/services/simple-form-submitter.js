import Ember from 'ember';

/**
  Handles submission of a simple form object to an endpoint.

  Right now, we use FormKeep.
*/
export default Ember.Service.extend({
  endpoint: 'https://formkeep.com/f/13a07940242d',

  submit(object) {
    if (Ember.isEmpty(object)) {
      return;
    }

    return Ember.$.ajax({
      type: 'POST',
      url: this.get('endpoint'),
      accepts: 'application/javascript',
      data: formObjectFromObject(object)
    });
  }
});

/**
  Creates a form object from a regular object.

  Uses Ember.keys to only add ownProperties.
*/
function formObjectFromObject(object) {
  let formObject = {};
  Ember.keys(object).forEach((key) => {
    formObject[key] = object[key];
  });

  return formObject;
}
