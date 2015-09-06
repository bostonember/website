import Ember from 'ember';

export default Ember.Route.extend({
  simpleFormSubmitter: Ember.inject.service(),

  model() {
    let recentParams = {
      orderBy: 'date',
      limitToLast: 5
    };

    return new Ember.RSVP.hash({
      meetups: this.store.find('meetup', recentParams),
      workshops: this.store.find('workshop', recentParams)
    });
  },

  actions: {
    submitTopic(topic) {
      topic.formName = 'suggestTopic';
      let submission = this.get('simpleFormSubmitter').submit(topic);

      submission.then(() => {
        // TODO: flash message
        this.controller.send('dismissTopicModal');
      });
    }

  }
});
