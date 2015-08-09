import {
  formatMarkdown
} from '../../../helpers/format-markdown';
import { module, test } from 'qunit';

module('FormatMarkdownHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = formatMarkdown('## Hi').toHTML();

  assert.equal(result, "<h2 id=\"hi\">Hi</h2>");
});
