import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;

moduleForModel('meetup', {
  needs: ['model:presentation', 'model:speaker']
});

test('titleForDisplay', function(assert) {
  let store = this.store();
  let model = this.subject();

  run(() =>{
    let speaker1 = store.createRecord('speaker', {
      firstName: "The",
      lastName: "Dude"
    });
    let presentation1 = store.createRecord('presentation', {
      title: 'Topic 1',
      speaker: speaker1
    });
    let speaker2 = store.createRecord('speaker', {
      firstName: "His",
      lastName: "Brother"
    });
    let presentation2 = store.createRecord('presentation', {
      title: 'Topic 2',
      speaker: speaker2
    });

    model.get('presentations').pushObjects([
      presentation1,
      presentation2
    ]);
  });

  run(() => {
    model.get('titleForDisplay');
  });

  assert.equal(model.get('titleForDisplay'), "\"Topic 1\" by The Dude and \"Topic 2\" by His Brother");
});
