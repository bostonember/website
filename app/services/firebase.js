import Ember from 'ember';
import Firebase from 'firebase';
import config from 'boston-ember/config/environment';

export default Ember.Service.extend({
  init() {
    this._super.apply(this, arguments);

    var firebase = new Firebase(config.firebase);
    this.set('backend', firebase);
  },

  isLoggedIn() {
    return !Ember.isEmpty(this.getAuth());
  },

  getAuth() {
    return this.get('backend').getAuth();
  },

  authWithPassword(credentials, callback) {
    return this.get('backend').authWithPassword(credentials, callback);
  }
});
