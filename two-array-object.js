"use strict";
// add whatever parameters you deem necessary & write docstring
/** returns an object of key value pairs */
function twoArrayObject(keys, values) {
  //create obj variable
  const keyToValue = {};
  //loop through keys (for loop)
  for(let i = 0; i < keys.length; i++){
    //if the index is greater than length of values
      //add in our key
      //add the value of null to that key
    if(i >= values.length){
      keyToValue[keys[i]] = null;
    }else{
      //add the key to the obj
      //add the value to the appropriate key based on index
      keyToValue[keys[i]] = values[i];
    }
  }
  //return obj
  return keyToValue;
}
/**
 * I: two arrays
 * O: an obj
 * logic:
 *  the obj is going to have the same number of keys as values in keys array -> O(n)
 
 * assumptions: lengths can different, if we run out of values we want to fill the keys with the value NULL
 *
 */
