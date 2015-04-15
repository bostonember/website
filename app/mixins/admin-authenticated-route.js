import Ember from 'ember';
import Firebase from 'firebase';
import config from '../config/environment';

export default Ember.Mixin.create({
  beforeModel() {
    // TODO firebase service
    var firebase = new Firebase(config.firebase);
    var authData = firebase.getAuth();

    if (Ember.isEmpty(authData)) {
      this.transitionTo('admin.login');
    }
  }
});
