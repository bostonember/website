import Ember from 'ember';

export default Ember.Controller.extend({
  pageClass: Ember.computed('currentPath', function() {
    var parts = this.get('currentPath').split('.');

    parts = parts.map((item, index, enumerable) => {
      if (index === 0) { return item; }
      var previous = enumerable.slice(0, index).join('-');
      return `${previous}-${item}`;
    });

    return parts.join(' ');
  })
});