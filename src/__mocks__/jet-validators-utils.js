/** Jest mock for jet-validators/utils (ESM-only package) */
function parseObject(schema) {
  return (obj) => obj;
}
function testObject(schema) {
  return () => true;
}
function transform(parser, validator) {
  return (arg) => (typeof parser === 'function' ? parser(arg) : arg);
}

class ParseError extends Error {}

module.exports = {
  parseObject,
  testObject,
  transform,
  ParseError,
  Schema: Object,
};
