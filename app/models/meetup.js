import Ember from 'ember';
import DS from 'ember-data';
var { moment } = window;

export default DS.Model.extend({
  date: DS.attr('date'),
  title: DS.attr('string'),
  presentations: DS.hasMany('presentations', { async: true }),
  url: DS.attr('string'),

  isUpcoming: Ember.computed('date', function() {
    var date = this.get('date');
    return moment(date).startOf('day') >= moment().startOf('day');
  }),

  isPast: Ember.computed.not('isUpcoming')
});
