import Ember from 'ember';

export default function nextMeetupFromMeetups(meetups) {
  if (Ember.isEmpty(meetups)) { return; }

  return meetups.find(function(meetup) {
    return meetup.get('isUpcoming');
  });
}
