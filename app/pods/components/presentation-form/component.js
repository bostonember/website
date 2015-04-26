import Ember from 'ember';

let { on } = Ember;

export default Ember.Component.extend({
  isAddingSpeaker: false,
  useMeetupSelector: false,

  setup: on('init', function() {
    this.set('selectedSpeaker', this.get('presentation.speaker'));
    this.set('selectedMeetup', this.get('presentation.meetup'));
  }),

  actions: {
    addSpeaker(speaker) {
      speaker.save().then(() => {
        this.set('selectedSpeaker', speaker);
        this.set('isAddingSpeaker', false);
      });
    },

    setSpeaker(speaker) {
      var presentation = this.get('presentation');
      presentation.set('speaker', speaker);
    },

    showAddSpeakerModal() {
      this.set('isAddingSpeaker', true);
    },

    dismissAddSpeakerModal() {
      this.set('isAddingSpeaker', false);
    }
  }
});
