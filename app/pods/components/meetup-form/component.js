import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMeetup() {
      var meetup = this.get('meetup');
      this.sendAction('save-meetup', meetup);
    }
  }
});
