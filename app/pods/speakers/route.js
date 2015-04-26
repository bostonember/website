import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Need to figure out how to sort speakers by meetup date in firebase.
    // do we need to add a field on save?
    return this.store.findAll('speaker');
  },

  afterModel() {
    //preload presentations
    this.store.findAll('presentation');
  }
});
