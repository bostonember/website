import startApp from 'bostonember/tests/helpers/start-app';

var App;

module('Integration - About Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to About page', function(assert){
  visit('/').then(function(){
    click("a:contains('About')").then(function(){
      assert.equal(find('h3').text(), 'About');
    });
  });
});
