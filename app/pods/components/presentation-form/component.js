import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setSpeaker(speaker) {
      var presentation = this.get('presentation');
      presentation.set('speaker', speaker);
    }
  }
});
