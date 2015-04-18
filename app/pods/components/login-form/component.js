import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  hasEmail: Ember.computed.notEmpty('email'),
  hasPassword: Ember.computed.notEmpty('password'),
  isValid: Ember.computed.and('hasEmail', 'hasPassword'),

  credentials: Ember.computed('email', 'password', function(){
    return {
      email: this.get('email'),
      password: this.get('password')
    };
  }),

  actions: {
    login() {
      var valid = this.get('isValid');

      if (valid) {
        var credentials = this.get('credentials');
        this.sendAction('login', credentials);
      } else {
        alert('You might want to type something.');
      }
    }
  }
});
