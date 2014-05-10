export default DS.Model.extend({
  name: DS.attr('string'),
  presentations: DS.hasMany('presentation')
});
