import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  slidesLink: DS.attr('string'),
  videoLink: DS.attr('string'),
  image: DS.attr('string'),

  speaker: DS.belongsTo('speaker', { async: true }),
  meetup: DS.belongsTo('meetup', { async: true }),

  hasImage: Ember.computed.notEmpty('image'),
  hasSlidesLink: Ember.computed.notEmpty('slidesLink'),
  hasVideoLink: Ember.computed.notEmpty('hasVideoLink')
});
