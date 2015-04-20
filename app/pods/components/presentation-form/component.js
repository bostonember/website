import Ember from 'ember';

export default Ember.Component.extend({
  isAddingSpeaker: false,
  selectedSpeaker: null,

  init() {
    this._super.apply(this, arguments);

    this.get('presentation.speaker').then((speaker) => {
      if (speaker && !speaker.get('isNew')) {
        this.set('selectedSpeaker', speaker);
      }
    });
  },

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
