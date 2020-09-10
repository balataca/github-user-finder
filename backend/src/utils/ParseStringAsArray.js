module.exports = (arrayAsString) => {
  return arrayAsString.toLowerCase().split(',').map(string => string.trim());
}