import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  github: DS.attr('string'),

  presentations: DS.hasMany('presentation', { async: true }),

  fullName: Ember.computed('firstName', 'lastName', function() {
    var first = this.get('firstName');
    var last = this.get('lastName');

    return [first, last].compact().join(' ');
  }),

  slug: Ember.computed('fullName', function() {
    return this.get('fullName').dasherize();
  }),

  githubAvatarURL: Ember.computed('github', function() {
    var github = this.get('github');

    return `https://avatars.githubusercontent.com/${github}`;
  }),

});
