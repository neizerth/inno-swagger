/** Jest mock for jet-validators (ESM-only package) */
const pass = () => true;
const isString = () => pass;
const isNonEmptyString = () => pass;
const isUnsignedInteger = () => pass;
const isNumber = () => pass;
const isDate = () => pass;

module.exports = {
  isString,
  isNonEmptyString,
  isUnsignedInteger,
  isNumber,
  isDate,
  PlainObject: Object,
};
