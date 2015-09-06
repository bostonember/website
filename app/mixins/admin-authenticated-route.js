import Ember from 'ember';

export default Ember.Mixin.create({
  firebase: Ember.inject.service('firebase'),

  beforeModel() {
    var loggedIn = this.get('firebase').isLoggedIn();

    if (!loggedIn) {
      this.transitionTo('admin.login');
    }
  }
});
