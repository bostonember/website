import Ember from 'ember';

const { run } = Ember;

function getStore(app) {
  return app.__container__.lookup('store:main');
}

export function createMeetup(app, attributes) {
  return createRecord(app, 'meetup', attributes);
}

export function createTalk(app, attributes) {
  return createRecord(app, 'presentation', attributes);
}

export function createSpeaker(app, attributes) {
  return createRecord(app, 'speaker', attributes);
}

export function addTalksToMeetup(meetup, attributes) {
  let talks = meetup.get('presentations');
  talks.then((relation) => {
    relation.pushObjects(attributes.talks || []);
  });

  return talks;
}

function createRecord(app, type, attributes) {
  const store = getStore(app);

  let record;

  run(() => {
    record = store.createRecord(type, attributes);
  });

  return record;
}
