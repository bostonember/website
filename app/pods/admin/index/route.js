import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  beforeModel() {
    this.transitionTo('admin.meetups.index');
  }
});
