import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('presentation-form', {
});

test('sets selectedSpeaker and selectedMeetup from presentation', function(assert) {
  let presentation = {
    speaker: { id: 1, name: 'dave' },
    meetup: { id: 2, title: 'foo' }
  };

  let component = this.subject({
    presentation: presentation
  });

  assert.equal(component.get('selectedMeetup'), presentation.meetup);
});
