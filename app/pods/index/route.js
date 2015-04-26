import Ember from 'ember';
import nextMeetupFromMeetups from 'boston-ember/utils/next-meetup-from-meetups';

export default Ember.Route.extend({
  model() {
    return this.store.findQuery('meetup', {
      orderBy: 'date',
      //equalTo: moment('2015-05-14 6:30PM', 'YYYY-MM-DD h:mmA').toISOString(),
      limitToLast: 5
    }).then((meetups) => {
      return {
        nextMeetup: nextMeetupFromMeetups(meetups),
        latestMeetups: meetups
      };
    });
  },

  afterModel(model) {
    if (model.nextMeetup) {
      // preload speakers and presentations
      return model.nextMeetup.get('presentations').then((presentations) => {
        var speakers = presentations.mapBy('speaker');
        return Ember.RSVP.all(speakers);
      });
    }
  }
});
