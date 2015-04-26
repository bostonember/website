import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // just find all the things until we figure out a better way to
    // store/sort the data with firebase

    return Ember.RSVP.hash({
      meetups: this.store.findAll('meetup'),
      talks: this.store.findAll('presentation'),
      speakers: this.store.findAll('speaker')
    });
  }
});
