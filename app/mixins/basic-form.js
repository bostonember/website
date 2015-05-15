import Ember from 'ember';

export default Ember.Mixin.create({
  tagName: '',

  didInsertElement() {
    this.set('formObject', Ember.Object.create());
  },

  willDestroyElement() {
    this.set('formObject', Ember.Object.create());
  },

  actions: {
    submit() {
      this.sendAction('on-submit', this.get('formObject'));
    },

    cancel() {
      this.sendAction('on-cancel');
    }
  }
});
