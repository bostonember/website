import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),

  presentations: DS.hasMany('presentations', { async: true }),

  fullName: Ember.computed('firstName', 'lastName', function() {
    var first = this.get('firstName');
    var last = this.get('lastName');

    return [first, last].compact().join(' ');
  })
});
