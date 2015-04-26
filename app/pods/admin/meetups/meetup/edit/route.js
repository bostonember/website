import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';
import SaveMeetupRoute from 'boston-ember/mixins/save-meetup';

export default Ember.Route.extend(AdminAuthenticatedRoute, SaveMeetupRoute, {
  model() {
    var meetup = this._super.apply(this, arguments);
    var speakers = this.store.findAll('speaker');

    return Ember.RSVP.hash({
      meetup: meetup,
      speakers: speakers
    });
  }
});
