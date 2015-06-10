import Ember from 'ember';

export default Ember.Controller.extend({
  // TODO: add lastPresentation date to speakers in firebase for sort
  speakerSort: ['fullName'],
  sortedSpeakers: Ember.computed.sort('model', 'speakerSort')
});
