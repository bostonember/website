import Ember from 'ember';

let { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['talk-list'],
  meetups: [],

  sort: ['date:desc'],
  sortedMeetups: computed.sort('meetups', 'sort'),

  speaker: undefined,
  isFilteringBySpeaker: computed.notEmpty('speaker'),

  speakerName: Ember.computed('speaker', function() {
    let speaker = this.get('speaker');

    if (Ember.isEmpty(speaker)) {
      return;
    }

    return this.get('speaker').split('-').invoke('capitalize').join(' ');
  }),

  filteredTalks: computed('talks', 'speaker', function() {
    let speaker = this.get('speaker');
    let talks = this.get('talks');

    return talks.filterBy('speaker.slug', speaker);
  })
});
