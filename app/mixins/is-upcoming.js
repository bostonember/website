import Ember from 'ember';
let { moment } = window;
let { computed } = Ember;

/**
  Adds isUpcoming and past booleans based on a date attribute.

  If the date is today or later, it is considered upcoming.
*/
export default Ember.Mixin.create({

  isUpcoming: computed('date', function() {
    let date = this.get('date');
    return moment(date).startOf('day') >= moment().startOf('day');
  }),

  isPast: computed.not('isUpcoming')
});
