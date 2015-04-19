import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';
var { moment } = window;

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    var newMeetup = this.store.createRecord('meetup', { date: new Date()});
    var speakers = this.store.findAll('speaker');
    var presentations = [
      this.store.createRecord('presentation'),
      this.store.createRecord('presentation')
    ];
    newMeetup.get('presentations').pushObjects(presentations);

    return Ember.RSVP.hash({
      meetup: newMeetup,
      speakers: speakers
    });
  },

  actions: {
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
          meetup.save().then((meetup) => {
            this.transitionTo('admin.meetups');
          })
          .catch((error) => {
            debugger
          });
        });
      });
    }
  }
});
