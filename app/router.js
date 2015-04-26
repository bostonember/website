import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('workshops');
  this.route('speakers');
  this.route('presentations', { path: 'talks' }, function() {});

  this.route('presentation', function() {
    this.route('new');
  });

  // admin routes

  this.route('admin', function() {
    this.route('login');

    this.route('meetups', function() {
      this.route('new');
      this.route('meetup.edit', { path: ':meetup_id/edit' });
    });

    this.route('presentations', { path: 'talks' }, function() {
      this.route('new');
      this.route('presentation.edit', { path: ':presentation_id/edit' });
    });

  });

});
