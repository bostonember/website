import Ember from 'ember';
import DS from 'ember-data';

let { moment } = window;
let { attr, hasMany } = DS;
let { computed } = Ember;

export default DS.Model.extend({
  date: attr('date'),
  title: attr('string'),
  presentations: hasMany('presentations', { async: true }),
  url: attr('string'),

  /**
    Returns true if the meetup date is today or in the future.
  */
  isUpcoming: computed('date', function() {
    let date = this.get('date');
    return moment(date).startOf('day') >= moment().startOf('day');
  }),

  isPast: computed.not('isUpcoming'),

  lightningTalks: Ember.computed.filterBy('presentations', 'isLightningTalk'),
  hasLightningTalks: Ember.computed.notEmpty('lightningTalks'),

  fullLengthTalks: Ember.computed('presentations', function() {
    return this.get('presentations').rejectBy('isLightningTalk', true);
  }),

  /**
    Returns a title for display. Defaults to title on the meetup, but if not
    provided, creates a title from the presentation titles & speaker names.

    ## Example without title

    ```javascript
    meetup.get('titleForDisplay');
    // "Presentation 1" by Speaker Name 1 and "Presentation 2" by Speaker Name 2
    ```
  */
  titleForDisplay: computed('title', 'presentations.@each.title', function(k,v) {
    if (arguments.length > 1) {
      return v;
    }

    let title = this.get('title');
    if (!Ember.isEmpty(title)) {
      return title;
    }

    this.get('presentations').then((presentations) => {
      Ember.RSVP.all(presentations.mapBy('speaker')).then(() => {
        let title = _meetupTitleFromPresentations(presentations);
        this.set('titleForDisplay', title);
      });
    });
  })
});

/**
  Builds a meetup title from presentations and speaker names.
**/
function _meetupTitleFromPresentations(presentations) {
  let titles = presentations.rejectBy('isLightningTalk', true);
  titles = titles.map((presentation) => {
    let speakerName = presentation.get('speaker.fullName');
    let presentationName = presentation.get('title');

    return `"${presentationName}" by ${speakerName}`;
  });

  return titles.join(' and ');
}
