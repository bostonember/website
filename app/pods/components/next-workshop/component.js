import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['next-workshop'],
  hasNextWorkshop: Ember.computed.notEmpty('workshop')
});
