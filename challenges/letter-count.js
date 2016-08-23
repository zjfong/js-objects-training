/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
var letters={};
var lower;

var letterCount = function(string){
  lower = string.toLowerCase();
//iterate through string
  for(i=0; i<lower.length; i++){
//if letter of string is not in the object, add the letter as a key with value 1
    if(!(letters[lower[i]])){
      letters[lower[i]]=1;
    } else {
      letters[lower[i]]++;
    }
//if letter of string is in the object, increase the value of the key

//return object letters





  }
  return letters;
}

// var test = function(e){
//     if(letters[e]){

//       letters[e]+=1;
//     // if(!(letters.lower[i]){
//     //   letters.lower[i]=1;



letterCount('apple')
console.log(letters)
