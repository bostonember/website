import Ember from 'ember';
import SaveWorkshopMixin from '../../../mixins/save-workshop';
import { module, test } from 'qunit';

module('SaveWorkshopMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveWorkshopObject = Ember.Object.extend(SaveWorkshopMixin);
  var subject = SaveWorkshopObject.create();
  assert.ok(subject);
});
