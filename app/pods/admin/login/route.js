import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service('firebase'),

  activate() {
    this.controllerFor('admin').set('isLoginRoute', true);
  },

  deactivate() {
    this.controllerFor('admin').set('isLoginRoute', false);
  },

  actions: {
    login(credentials) {
      this.get('firebase').authWithPassword(credentials, (error) => {
        if (error) {
          alert("COMEON MAN! You know that's not a valid account.");
        } else {
          this.transitionTo('admin.meetups.index');
        }
      });
    }
  }
});
