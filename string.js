/**
 * Takes the input string and limits it's search area if position is defined.
 * Then slices off the length of the search string from the end of the input.
 * Checks if the sliced ending matches the search string.
 * 
 * @returns Whether or not the created slice equals the search string.
 */
String.prototype.endsWith = function(search, position) {
    var input = (position) ? this.slice(0, position) : this;
    return search === input.slice(input.length - search.length, input.length);
}
