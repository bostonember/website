import Ember from 'ember';

export default Ember.Route.extend({
  simpleFormSubmitter: Ember.inject.service(),

  actions: {
    addTalk() {
      this.controller.send('addTalk');
    },

    submitTalk(talk) {
      talk.formName = 'submitTalk';
      let submission = this.get('simpleFormSubmitter').submit(talk);

      submission.then(() => {
        // TODO: flash message
        this.controller.send('dismissTalkModal');
      });
    }
  }
});
