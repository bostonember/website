import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['talk-list'],
  meetups: [],
  sort: ['date:desc'],

  sortedMeetups: Ember.computed.sort('meetups', 'sort')
});
