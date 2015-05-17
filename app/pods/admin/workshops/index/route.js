import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('workshop');
  },

  actions: {
    deleteWorkshop(workshop) {
      if(confirm("Hope you're sure... there's no going back.")) {
        workshop.destroyRecord();
      }
    }
  }
});
