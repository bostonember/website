import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    var newMeetup = this.store.createRecord('meetup');
    var presentations = [
      this.store.createRecord('presentation'),
      this.store.createRecord('presentation')
    ];
    newMeetup.get('presentations').pushObjects(presentations);

    return newMeetup;
  }
});
