import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('meetup-form', {
  needs: ['component:ember-selectize']
});


test('saveMeetup sends save-meetup action', function(assert) {
  let meetupFromAction;
  let meetup = fakeMeetup();

  let targetObject = {
    fakeActionHandler: function(meetup) {
      meetupFromAction = meetup;
    }
  };

  let component = this.subject({
    meetup: meetup,
    targetObject: targetObject,
    'save-meetup': 'fakeActionHandler'
  });

  component.send('saveMeetup');

  assert.equal(meetupFromAction, meetup);
});

test('cancelSave sends cancel-meetup action', function(assert) {
  let canceled = false;

  let targetObject = {
    fakeActionHandler: function() {
      canceled = true;
    }
  };

  let component = this.subject({
    targetObject: targetObject,
    'cancel-save': 'fakeActionHandler'
  });

  component.send('cancelSave');

  assert.equal(canceled, true);
});

const fakeMeetup = function() {
  return { id: 1, title: 'yay' };
};
