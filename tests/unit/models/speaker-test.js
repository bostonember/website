import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('speaker', {
  needs: ['model:presentation', 'model:meetup']
});

test('fullName combines first and last', function(assert) {
  let model = this.subject({
    firstName: 'The',
    lastName: 'Dude'
  });

  let fullName = model.get('fullName');

  assert.equal(fullName, 'The Dude', 'full name should combine first and last names');
});

test('fullName handles no last name', function(assert) {
  let model = this.subject({
    firstName: 'The'
  });

  let fullName = model.get('fullName');

  assert.equal(fullName, 'The', 'full name should handle lack of last name');
});

test('slug dasherizes full name', function(assert) {
  let model = this.subject({
    firstName: 'The',
    lastName: 'DUDE'
  });

  let slug = model.get('slug');

  assert.equal(slug, 'the-dude', 'slug should be dasherized full name');
});

test('githubAvatarURL returns url with github appended', function(assert) {
  let model = this.subject({
    github: 'cball'
  });

  let url = model.get('githubAvatarURL');

  assert.equal(url, 'https://avatars.githubusercontent.com/cball');
});
