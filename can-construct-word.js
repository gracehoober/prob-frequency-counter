"use strict";
// add whatever parameters you deem necessary & write doc comment
/**canConstructWord: returns a boolean based on
 * frequency of letters in `word` string appearing
 * in `letters` string
 */
function canConstructWord(word, letters) {
  const wordFrequency = makeCounter(word);
  const letterFrequency = makeCounter(letters);

  for (let letter in wordFrequency) {
    if (letterFrequency[letter] === undefined) {
      return false;
    }
    if (wordFrequency[letter] > letterFrequency[letter]) {
      return false;
    }
  }
  return true;
}
/** returns an obj of value to frequency */
function makeCounter(string) {
  const counter = {};

  for (let char of string) {
    const current = counter[char] || 0;
    counter[char] = current + 1;
  }
  return counter;
}
console.log(makeCounter("aa"));
console.log(makeCounter("abcd"))
/* Problem solving
I: two strings
O: boolean
assumptions: there are only lowercase letters with not apces or puncs

solve as a human:
- keep track of all the letters in word and then compare frequency to the occurances in letters

simpler problem
-ignoring frequency are all the letters in the word in the other string

Pseudo:
-make a frequency counter
-input word and letters to the frequency counter to get obj result
-compare the number of occurance in letters --> must be greater than or equal
 - if fails return false

-return true

*/
