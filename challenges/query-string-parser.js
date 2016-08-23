/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/


// var parseQueryString = function(string){

  function pq(string){
    var object = {};
    var and = string.indexOf('&');

    if(and !== -1){
      var parsedArr=string.split('&');
      parsedArr.forEach(function(pair){
        var parse = pair.split('=');
        var key = parse[0];
        var value = parse[1];
        object[key]= value;
      });
    } else {
        var parse = string.split('=');
        var key = parse[0];
        var value = parse[1];
        object[key]= value;
    }

    return object;
  }









  // var equals = string.indexOf('=');
  // var and = string.indexOf('&');



  // var key = string.substring(0,equals);
  // var value = string.substring((and + 1),
  // object[key]
  //iterate through string


  // for(i=0; i<string.length; i++){
  //   if(string[i] === '='){
  //     var remove = string.substring(0,string[i])


  //   }

  // }



  //find at what indices there are equals signs
  //find at what indices there are ampersand signs


  //capture value up till '=', add as key to object
  //capture value to end or till '&', add as value to key just created
  //if '&', repeat previous code



  //







//}
