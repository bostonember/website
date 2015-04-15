import Ember from 'ember';
import nextMeetupFromMeetups from 'boston-ember/utils/next-meetup-from-meetups';

export default Ember.Route.extend({
  model() {
    return this.store.findQuery('meetup', {
      orderBy: 'date',
      limitToLast: 5
    }).then((meetups) => {
      return {
        nextMeetup: nextMeetupFromMeetups(meetups),
        latestMeetups: meetups
      };
    });
  },

  afterModel(model) {
    // preload speakers and presentations
    return model.nextMeetup.get('presentations').then((presentations) => {
      var speakers = presentations.mapBy('speaker');
      return Ember.RSVP.all(speakers);
    });
  }
});
