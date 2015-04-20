import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';
var { moment } = window;

export default Ember.Route.extend(AdminAuthenticatedRoute, {

  model() {
    var meetup = this._super.apply(this, arguments);
    var speakers = this.store.findAll('speaker');

    return Ember.RSVP.hash({
      meetup: meetup,
      speakers: speakers
    });
  },

  actions: {
    /**
      Saves a Meetup along with child presentation and speaker records.
    */
    saveMeetup(meetup) {
      var presentations = meetup.get('presentations');
      var actualDate = moment(meetup.get('date')).toDate();
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
  }
});
