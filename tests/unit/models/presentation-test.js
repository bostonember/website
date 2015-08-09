import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('presentation', {
  needs: ['model:speaker', 'model:meetup']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
