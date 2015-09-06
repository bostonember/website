import Ember from 'ember';
import AdminAuthenticatedRoute from 'boston-ember/mixins/admin-authenticated-route';

export default Ember.Route.extend(AdminAuthenticatedRoute, {
  model() {
    return this.store.findAll('meetup');
  },

  actions: {
    deleteMeetup(meetup) {
      if(confirm("Hope you're sure... there's no going back.")) {
        meetup.get('presentations').then((presentations) => {
          // TODO: firebase might handle this automatically?
          var deletes = presentations.invoke('destroyRecord');
          Ember.RSVP.all(deletes).then(() => {
            meetup.destroyRecord();
          });
        });
      }
    }
  }
});
