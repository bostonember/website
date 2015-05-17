import Ember from 'ember';

export default Ember.Component.extend({
  sort: ['date:desc'],
  sortedWorkshops: Ember.computed.sort('workshops', 'sort'),
  upcomingWorkshops: Ember.computed.filterBy('sortedWorkshops', 'isUpcoming'),
  pastWorkshops: Ember.computed.setDiff('sortedWorkshops', 'upcomingWorkshops'),

  hasUpcomingWorkshops: Ember.computed.gt('upcomingWorkshops.length', 0)
});
