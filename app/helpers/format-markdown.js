import Ember from 'ember';
let { Showdown } = window;

export function formatMarkdown(markdown) {
  let converter = new Showdown.converter();
  let source = markdown || '';

  return new Ember.Handlebars.SafeString(converter.makeHtml(source));
}

export default Ember.HTMLBars.makeBoundHelper(formatMarkdown);
