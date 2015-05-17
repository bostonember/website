import Ember from 'ember';
let { moment } = window;

/**
  Handles saving a workshop.
**/
export default Ember.Mixin.create({
  actions: {
    saveWorkshop(workshop) {
      let actualDate = moment(workshop.get('date')).toDate();
      workshop.set('date', actualDate);

      workshop.save().then(() => {
        this.transitionTo('admin.workshops');
      });
    }
  }
});
