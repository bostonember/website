import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'boston-ember/tests/helpers/start-app';
import * as seedHelpers  from '../helpers/seed-data';

var application;

module('Acceptance: UserSeesNextUpcomingTalk', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('user sees next upcoming meetup', function(assert) {
  let done = assert.async();
  let speaker = seedHelpers.createSpeaker(application, {
    firstName: 'The',
    lastName: 'Dude'
  });
  let speaker2 = seedHelpers.createSpeaker(application, {
    firstName: 'Batman'
  });
  let talk = seedHelpers.createTalk(application, {
    title: 'Amazing Talk',
    speaker: speaker
  });
  let talk2 = seedHelpers.createTalk(application, {
    title: 'Crazy Talk',
    speaker: speaker2
  });
  let meetup = seedHelpers.createMeetup(application, {
    date: moment().add(2, 'days')
  });
  seedHelpers.addTalksToMeetup(meetup, {
    talks: [talk, talk2]
  }).then(done);


  visit('/');

  andThen(function() {
    assert.ok(false, 'not done yet');
  });
});
