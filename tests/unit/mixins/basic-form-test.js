import Ember from 'ember';
import BasicFormMixin from '../../../mixins/basic-form';
import { module, test } from 'qunit';

module('BasicFormMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var BasicFormObject = Ember.Object.extend(BasicFormMixin);
  var subject = BasicFormObject.create();
  assert.ok(subject);
});
