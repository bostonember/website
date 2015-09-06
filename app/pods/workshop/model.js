import DS from 'ember-data';
import isUpcoming from 'boston-ember/mixins/is-upcoming';

let { attr } = DS;

export default DS.Model.extend(isUpcoming, {
  title: attr('string'),
  date: attr('date'),
  description: attr('string'),
  url: attr('string')
});
