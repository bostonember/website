import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['speaker'],
  speaker: undefined,
});
