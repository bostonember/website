import Ember from 'ember';
const { moment } = window;


export default Ember.Mixin.create({

 actions: {
    /**
      Saves a Meetup along with child presentation and speaker records.
    */
    saveMeetup(meetup) {
      let presentations;
      let blankPresentations = meetup.get('presentations').filterBy('title', undefined);
      let actualDate = moment(meetup.get('date')).toDate();

      meetup.set('date', actualDate);
      meetup.get('presentations').removeObjects(blankPresentations);
      presentations = meetup.get('presentations');

      let speakersToSave = presentations.filterBy('speaker.isNew').map((presentation) => {
        return presentation.get('speaker').save();
      });

      let presentationsToSave = presentations.map((presentation) => {
        return presentation.save();
      });

      Ember.RSVP.all(speakersToSave).then(() => {
        return Ember.RSVP.all(presentationsToSave).then(() => {
          meetup.save().then(() => {
            this.transitionTo('admin.meetups');
          })
          .catch(() => {
            alert('sorry. that failed');
          });
        });
      });
    }
  }

});
