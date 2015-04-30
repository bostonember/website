import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['next-meetup'],
  hasNextMeetup: Ember.computed.notEmpty('meetup'),

  lightningTalks: Ember.computed.filterBy('meetup.presentations', 'isLightningTalk'),
  hasLightningTalks: Ember.computed.notEmpty('lightningTalks'),

  fullLengthTalks: Ember.computed('lightningTalks', function() {
    return this.get('meetup.presentations').rejectBy('isLightningTalk', true);
  }),

  meetupTitle: Ember.computed('fullLengthTalks', function() {
    var presentations = this.get('fullLengthTalks');
    var title = this.getWithDefault('meetup.title', meetupTitleFromPresentations(presentations));

    return title;
  })

});

function meetupTitleFromPresentations(presentations) {
  var presentationTitles = presentations.map((p) => {
    var speakerName = p.get('speaker.fullName');
    var presentationName = p.get('title');

    return `"${presentationName}" by ${speakerName}`;
  });

  return presentationTitles.join(' and ');
}
