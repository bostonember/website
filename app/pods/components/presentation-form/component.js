import Ember from 'ember';

// let { on } = Ember;
let { oneWay, sort } = Ember.computed;

export default Ember.Component.extend({
  isAddingSpeaker: false,
  useMeetupSelector: false,

  selectedMeetup: oneWay('presentation.meetup'),
  selectedSpeaker: oneWay('presentation.speaker'),
  meetupSort: ['date:desc'],
  sortedMeetups: sort('meetups', 'meetupSort'),
  speakerSort: ['fullName'],
  sortedSpeakers: sort('speakers', 'speakerSort'),

  actions: {
    addSpeaker(speaker) {
      speaker.save().then(() => {
        this.set('selectedSpeaker', speaker);
        this.set('isAddingSpeaker', false);
      });
    },

    setSpeaker(speaker) {
      let presentation = this.get('presentation');
      presentation.set('speaker', speaker);
    },

    setMeetup(meetup) {
      let presentation = this.get('presentation');
      presentation.set('meetup', meetup);
    },

    showAddSpeakerModal() {
      this.set('isAddingSpeaker', true);
    },

    dismissAddSpeakerModal() {
      this.set('isAddingSpeaker', false);
    }
  }
});
