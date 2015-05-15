import Ember from 'ember';

export default Ember.Controller.extend({
  isSuggestingTopic: false,

  actions: {
    suggestTopic() {
      this.set('isSuggestingTopic', true);
    },

    dismissTopicModal() {
      this.set('isSuggestingTopic', false);
    }
  }
});
