import Ember from 'ember';
import IsUpcomingMixin from '../../../mixins/is-upcoming';
import { module, test } from 'qunit';

module('IsUpcomingMixin');

test('isUpcoming returns true if date is in the future', function(assert) {
  var IsUpcomingObject = Ember.Object.extend(IsUpcomingMixin);
  var subject = IsUpcomingObject.create({ date: new Date() });

  assert.ok(subject.get('isUpcoming'));
});

test('isUpcoming returns false if date is in the past', function(assert) {
  var IsUpcomingObject = Ember.Object.extend(IsUpcomingMixin);
  var subject = IsUpcomingObject.create({ date: moment().subtract(1, 'days').toDate() });

  assert.equal(subject.get('isUpcoming'), false);
});
