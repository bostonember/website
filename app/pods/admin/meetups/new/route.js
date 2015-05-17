import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';
import SaveMeetupRoute from 'boston-ember/mixins/save-meetup';
var { moment } = window;

export default Ember.Route.extend(AdminAuthenticatedRoute, SaveMeetupRoute, {
  model() {
    let speakers = this._allPersistedSpeakers();
    let newMeetup = this._newMeetupWithPresentationsAndSpeakers();

    return Ember.RSVP.hash({
      meetup: newMeetup,
      speakers: speakers
    });
  },

  /**
    Delete any newly created meetup/presentation records on route exit.
  */
  resetController(controller, isExiting) {
    let meetup = controller.get('model.meetup');

    if (isExiting) {
      cleanupUnsavedMeetup(meetup);
    }
  },

  actions: {
    cancelSave() {
      this.transitionTo('admin.meetups');
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
    // TODO: day(4) resets the moment, how to get following thursday + 1 week?
    let startDate = moment().endOf('month').add(1, 'day').hours(18).minutes(30).seconds(0);
    let newMeetup = this.store.createRecord('meetup', { date: startDate.toDate() });

    let newSpeaker1 = this.store.createRecord('speaker');
    let newSpeaker2 = this.store.createRecord('speaker');
    let presentations = [
      this.store.createRecord('presentation', { speaker: newSpeaker1 }),
      this.store.createRecord('presentation', { speaker: newSpeaker2 })
    ];

    newMeetup.get('presentations').pushObjects(presentations);

    return newMeetup;
  }
});

var cleanupUnsavedMeetup = function(meetup) {
  if(Ember.isEmpty(meetup)) { return; }

  if (meetup.get('isNew')) {
    meetup.get('presentations').then((presentations) => {
      presentations.invoke('destroyRecord');
    });

    meetup.destroyRecord();
  }
};
