export default function nextMeetupFromMeetups(meetups) {
  return meetups.find(function(meetup) {
    return meetup.get('isUpcoming');
  });
}
