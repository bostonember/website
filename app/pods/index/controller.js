import Ember from 'ember';

export default Ember.Controller.extend({
  isSuggestingTopic: false,
  isAddingTalk: false,

  actions: {
    suggestTopic() {
      this.set('isSuggestingTopic', true);
    },

    dismissTopicModal() {
      this.set('isSuggestingTopic', false);
    },

    addTalk() {
      this.set('isAddingTalk', true);
    },

    dismissTalkModal() {
      this.set('isAddingTalk', false);
    }
  }
});
