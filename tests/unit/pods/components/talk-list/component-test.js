import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('talk-list', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('speakerName returns capitalized name from slug', function(assert) {
  let component = this.subject({
    speaker: 'the-dude'
  });

  let name = component.get('speakerName');

  assert.equal(name, 'The Dude', 'name should be properly capitalized and joined with spaces');
});

test('filteredTalks filters talks by a slug', function(assert) {
  let speaker1 = {
    slug: 'yeah-buddy'
  };
  let speaker2 = {
    slug: 'no-way'
  };
  let talks = [
    {
      speaker: speaker1
    },
    {
      speaker: speaker2
    }
  ];

  let component = this.subject({
    speaker: speaker1.slug,
    talks: talks
  });

  let filteredTalks = component.get('filteredTalks');

  assert.equal(filteredTalks.length, 1);
  assert.equal(filteredTalks.get('firstObject.speaker'), speaker1);
});
