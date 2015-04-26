import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('meetup', {
  needs: ['model:presentation', 'model:speaker']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
