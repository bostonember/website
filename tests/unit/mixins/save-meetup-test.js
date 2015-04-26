import Ember from 'ember';
import SaveMeetupMixin from '../../../mixins/save-meetup';
import { module, test } from 'qunit';

module('SaveMeetupMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveMeetupObject = Ember.Object.extend(SaveMeetupMixin);
  var subject = SaveMeetupObject.create();
  assert.ok(subject);
});
