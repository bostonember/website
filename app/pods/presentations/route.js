import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    /**
      Firebase doesn't seem to have a good way to filter through queries
      (talks by speaker for example), so just return the world.
    */
    return Ember.RSVP.hash({
      meetups: this.store.find('meetup'),
      talks: this.store.find('presentation'),
      speakers: this.store.find('speaker')
    });
  }
});
