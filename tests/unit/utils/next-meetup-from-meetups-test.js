import nextMeetupFromMeetups from '../../../utils/next-meetup-from-meetups';
import { module, test } from 'qunit';
import Ember from 'ember';

module('nextMeetupFromMeetups');

test('it returns nothing if no meetups', function(assert) {
  let result = nextMeetupFromMeetups();
  assert.equal(result, undefined);

  result = nextMeetupFromMeetups([]);
  assert.equal(result, undefined);
});

test('it returns an upcoming meetup', function(assert) {
  let fakeMeetup = Ember.Object.create({
    isUpcoming: true
  });

  let result = nextMeetupFromMeetups([fakeMeetup]);

  assert.equal(result, fakeMeetup);
});
