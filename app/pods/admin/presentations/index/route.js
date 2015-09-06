import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    return Ember.RSVP.hash({
      meetups: this.store.findAll('meetup')
    });
  }
});
