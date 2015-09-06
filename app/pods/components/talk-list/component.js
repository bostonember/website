import Ember from 'ember';

let { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['talk-list'],
  meetups: [],

  sort: ['date:desc'],
  sortedMeetups: computed.sort('meetups', 'sort'),

  /**
    TODO: currently this expects a query param,
    it would be good to pass in the speaker object instead.
  */
  speaker: undefined,
  isFilteringBySpeaker: computed.notEmpty('speaker'),

  /**
    Create a speaker name from a slug
  **/
  speakerName: computed('speaker', function() {
    let speaker = this.get('speaker');

    if (Ember.isEmpty(speaker)) {
      return;
    }

    return this.get('speaker').split('-').invoke('capitalize').join(' ');
  }),

  /**
    Filter a set of talks by speaker slug.
  */
  filteredTalks: computed('talks', 'speaker', function() {
    let speaker = this.get('speaker');
    let talks = this.get('talks');

    return talks.filterBy('speaker.slug', speaker);
  })
});
