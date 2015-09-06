import Ember from 'ember';

export default Ember.Controller.extend({
  sort: ['date:desc'],
  sortedWorkshops: Ember.computed.sort('model', 'sort')
});
