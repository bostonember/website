import Ember from 'ember';
import AdminAuthenticatedRouteMixin from '../../../mixins/admin-authenticated-route';
import { module, test } from 'qunit';

module('AdminAuthenticatedRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var AdminAuthenticatedRouteObject = Ember.Object.extend(AdminAuthenticatedRouteMixin);
  var subject = AdminAuthenticatedRouteObject.create();
  assert.ok(subject);
});
