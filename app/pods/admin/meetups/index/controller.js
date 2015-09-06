import Ember from 'ember';

export default Ember.Controller.extend({
  sort: ['date:desc'],
  sortedMeetups: Ember.computed.sort('model', 'sort')
});