import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('workshops');
  this.route('speakers');
  this.route('talks', function() {});

  this.route('talk', function() {
    this.route('new');
  });

  this.route('admin', function() {
    this.route('login');

    this.route('meetups', function() {
      this.route('new');
    });

    this.route('meetup', { path: 'meetups/:meetup_id' }, function() {
      this.route('edit');
    });
  });

});
