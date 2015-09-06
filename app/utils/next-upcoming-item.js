import Ember from 'ember';

/**
  Returns the next upcoming item by getting the first item
  where isUpcoming === true.
*/
export default function nextUpcomingItem(items) {
  if (Ember.isEmpty(items)) { return; }

  return items.find(function(item) {
    return item.get('isUpcoming');
  });
}
