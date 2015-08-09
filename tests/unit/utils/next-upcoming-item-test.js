import nextUpcomingItem from 'boston-ember/utils/next-upcoming-item';
import { module, test } from 'qunit';
import Ember from 'ember';

module('nextUpcomingItem');

test('it returns nothing if no upcoming items', function(assert) {
  let result = nextUpcomingItem();
  assert.equal(result, undefined);

  result = nextUpcomingItem([]);
  assert.equal(result, undefined);
});

test('it returns an upcoming item', function(assert) {
  let fakeMeetup = Ember.Object.create({
    isUpcoming: true
  });

  let result = nextUpcomingItem([fakeMeetup]);

  assert.equal(result, fakeMeetup);
});
