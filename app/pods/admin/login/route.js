import Ember from 'ember';
import Firebase from 'firebase';
import config from 'boston-ember/config/environment';

export default Ember.Route.extend({
  actions: {
    login(email, password) {
      // TODO firebase service
      var firebase = new Firebase(config.firebase);
      var credentials = {
        email: email,
        password: password
      };

      firebase.authWithPassword(credentials, this._authResponse);
    }
  },

  _authResponse(error) {
    if (error) {
      alert("COMEON MAN! You know that's not a valid account.");
    } else {
      this.transitionTo('admin');
    }
  }
});
