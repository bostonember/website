import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    var speakers = this._allPersistedSpeakers();
    var newMeetup = this._newMeetupWithPresentationsAndSpeakers();

    return Ember.RSVP.hash({
      meetup: newMeetup,
      speakers: speakers
    });
  },

  /**
    When this route exits, delete any newly created meetup/presentation records.
  */
  resetController(controller, isExiting) {
    var meetup = controller.get('model.meetup');

    if (isExiting && meetup.get('isNew')) {
      meetup.get('presentations').then((presentations) => {
        presentations.forEach((presentation) => {
          presentation.destroyRecord();
        });
      });

      meetup.destroyRecord();
    }
  },

  actions: {

    /**
      Saves a Meetup along with child presentation and speaker records.
    */
    saveMeetup(meetup) {
      var presentations = meetup.get('presentations');
      var actualDate = meetup.get('date').toDate();
      meetup.set('date', actualDate);

      var speakersToSave = presentations.filterBy('speaker.isNew').map((presentation) => {
        return presentation.get('speaker').save();
      });

      var presentationsToSave = presentations.map((presentation) => {
        return presentation.save();
      });

      Ember.RSVP.all(speakersToSave).then(() => {
        return Ember.RSVP.all(presentationsToSave).then(() => {
          meetup.save().then(() => {
            this.transitionTo('admin.meetups');
          })
          .catch(() => {
            alert('sorry. that failed');
          });
        });
      });
    }
  },

  /**
    Fetches all speakers, then returns a live RecordArray of persisted speakers.
  */
  _allPersistedSpeakers() {
    return this.store.findAll('speaker').then(() => {
      return this.store.filter('speaker', function(speaker) {
        return !speaker.get('isNew');
      });
    });
  },

  /**
    Creates a new Meetup record with new presentations and speakers.
  */
  _newMeetupWithPresentationsAndSpeakers() {
    var newMeetup = this.store.createRecord('meetup', { date: new Date()});

    var newSpeaker1 = this.store.createRecord('speaker');
    var newSpeaker2 = this.store.createRecord('speaker');
    var presentations = [
      this.store.createRecord('presentation', { speaker: newSpeaker1 }),
      this.store.createRecord('presentation', { speaker: newSpeaker2 })
    ];

    newMeetup.get('presentations').pushObjects(presentations);

    return newMeetup;
  }
});
