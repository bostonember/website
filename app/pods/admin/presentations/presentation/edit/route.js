import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    var presentation = this._super.apply(this, arguments);
    var speakers = this.store.findAll('speaker');

    return Ember.RSVP.hash({
      presentation: presentation,
      speakers: speakers
    });
  },

  actions: {
    savePresentation() {
      var presentation = this.controller.get('model.presentation');
      presentation.save().then(() => {
        this.transitionTo('admin.presentations');
      })
      .catch(() => {
        alert('couldnt save presentation.');
      });
    }
  }
});
