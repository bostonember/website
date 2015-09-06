import Ember from 'ember';
import nextUpcomingItem from 'boston-ember/utils/next-upcoming-item';

export default Ember.Controller.extend({
  isSuggestingTopic: false,
  nextMeetup: Ember.computed('model.meetups.[]', function() {
    let meetups = this.get('model.meetups');

    return nextUpcomingItem(meetups);
  }),

  nextWorkshop: Ember.computed('model.workshops.[]', function() {
    let workshops = this.get('model.workshops');

    return nextUpcomingItem(workshops);
  }),

  actions: {
    suggestTopic() {
      this.set('isSuggestingTopic', true);
    },

    dismissTopicModal() {
      this.set('isSuggestingTopic', false);
    }
  }
});
