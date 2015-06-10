import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['next-meetup'],
  hasNextMeetup: Ember.computed.notEmpty('meetup')
});
