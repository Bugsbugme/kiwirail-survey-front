/**
 * Convert a string to title case
 * {@link https://gist.github.com/kieranbarker/293b74f1b3b46272315d2e1719786b03}
 * @param {String} str The string to convert
 * @returns {String} The converted string
 */

export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
