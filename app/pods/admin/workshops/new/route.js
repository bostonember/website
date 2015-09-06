import Ember from 'ember';
import saveWorkshop from 'boston-ember/mixins/save-workshop';

let { moment } = window;

export default Ember.Route.extend(saveWorkshop, {
  model() {
    let startDate = moment().endOf('month').add(1, 'day').hours(18).minutes(30).seconds(0);
    return this.store.createRecord('workshop', { date: startDate.toDate() });
  },

  resetController(controller, isExiting) {
    let workshop = controller.get('model');

    if (isExiting) {
      cleanupUnsavedWorkshop(workshop);
    }
  }
});

var cleanupUnsavedWorkshop = function(workshop) {
  if (Ember.isEmpty(workshop)) { return; }

  if (workshop.get('isNew')) {
    workshop.destroyRecord();
  }
};
