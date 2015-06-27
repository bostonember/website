import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import Firebase from 'firebase';

setResolver(resolver);
Firebase.goOffline();
