// add whatever parameters you deem necessary & write docstring
function sameFrequency(n1, n2) {
  //make frequency counter objects from both (as strings)
  //guard statement -- unequal lengths
  const stringFromN1 = n1.toString();
  const stringFromN2 = n2.toString();

  if (stringFromN1.length !== stringFromN2.length) {
    return false;
  }

  const n1Frequency = makeCounter(stringFromN1);
  const n2Frequency = makeCounter(stringFromN2);

  //compare
  for (let digit in n1Frequency) {
    if (!(digit in n2Frequency)) {
      return false;
    }
    if (n1Frequency[digit] !== n2Frequency[digit]) {
      return false;
    }
  }

  return true;
}


/**Make a frequency counter */
function makeCounter(string) {
  const counter = {};

  for (let char of string) {
    const current = counter[char] || 0;
    counter[char] = current + 1;
  }
  return counter;
}

//look at the digits of two numbers
//and compare their frequency

/*
I: two positive integers (number1, number2)
O: boolean, based on shared digit frequency

human solve:
look at the numbers,
count the frequency of each digit I see (in each number)
and compare

edge case -- unequal lengths
assumptions: positive integers
in: O(n + m) -- O(n) for each of these numbers, which can
  be different lengths

STEPS:
  interpolate the digits -- be able to read each digit
  of each number

  Make frequency counters for the digits of each number

  And compare them!

simpler: we know how to do this if they were both strings!

*/
