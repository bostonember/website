import Ember from 'ember';

/**
  Handles submission of form data to an endpoint.

  Right now, we use FormKeep.
*/
export default Ember.Service.extend({
  endpoint: 'https://formkeep.com/f/13a07940242d',

  submit(object) {
    if (Ember.isEmpty(object)) {
      return;
    }

    let endpoint = this.get('endpoint');
    let pojo = {};
    Ember.keys(object).forEach((key) => {
      pojo[key] = object[key];
    });

    return Ember.$.ajax({
      type: 'POST',
      url: endpoint,
      accepts: 'application/javascript',
      data: pojo
    });
  }
});
