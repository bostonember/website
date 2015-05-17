import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let presentation = this.store.createRecord('presentation');
    let meetups = this.store.findAll('meetup');
    let speakers = this.store.findAll('speaker');

    return Ember.RSVP.hash({
      presentation: presentation,
      meetups: meetups,
      speakers: speakers
    });
  },

  resetController(controller, isExiting) {
    let presentation = controller.get('model.presentation');

    if (isExiting && presentation.get('isNew')) {
      presentation.destroyRecord();
    }
  },

  actions: {
    savePresentation() {
      let controller = this.controller;
      let presentation = controller.get('model.presentation');
      // controller.set('isSubmitting', true);

      presentation.save()
      .then(() => {
        // Firebase seems to require us to save everything to get the indexes right?!
        let speakerToSave = presentation.get('speaker.content');
        speakerToSave.get('presentations').pushObject(presentation);

        let meetupToSave = presentation.get('meetup.content');
        meetupToSave.get('presentations').pushObject(presentation);

        Ember.RSVP.all([
          speakerToSave.save(),
          meetupToSave.save()
        ])
        .then(() => {
          this.transitionTo('admin.presentations');
        });
      })
      .catch(() => {
        alert('presentation no save.');
      })
      .finally(() => {
        // controller.set('isSubmitting', false);
      });
    }
  }
});
