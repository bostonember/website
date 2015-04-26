import Ember from 'ember';

export default Ember.Component.extend({
  'edit-presentations': true,

  actions: {
    saveMeetup() {
      var meetup = this.get('meetup');
      this.sendAction('save-meetup', meetup);
    },

    cancelSave() {
      this.sendAction('cancel-save');
    }
  }
});
