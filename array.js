/**
 * Iterate over arg list and check if each index results in the function returning true.
 * 
 * @returns
 * If an index results in the function returning true, findIndex returns that index.
 * If non of the list values return true for the function, findIndex returns -1.
 */
Array.prototype.findIndex = function(fn) {
    for(var i = 0; i < this.length; i++){
        if(fn(this[i]))
          return i;
    }
  return -1;
  } 
  
  
  /**
   * Leverages findIndex to determine the index in which the function returns true.
   * 
   * @returns
   * If the foundIndex >= 0, the function will return the value found at that index.
   * If the foundIndex < 0, the function will return undefined as the value is not found.
   */
  Array.prototype.find = function(fn) {
    var foundIndex = this.findIndex(fn);
    return foundIndex >= 0 ? this[foundIndex] : undefined;
  }
  
  /**
   * Iterates over arg list validating if the given index equals the search value.
   * 
   * @returns
   * Function will return true when the search value is found in the arg list.
   * Function will return false if the search value is not found after checking all values of the arg list.
   */
  Array.prototype.includes = function(search) {
    for(var i = 0; i < this.length; i++){
      if(this[i] === search){
        return true;
      }
    }
    return false;
  }