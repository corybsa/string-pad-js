string-pad-js
=============

A JavaScript method to pad any number of characters to the left or right of a string object.

<pre><code>String.prototype.pad = function(side, char, maxLength) {
  var padding = "";
  
  for(var i = this.length; i &lt; maxLength; i++) {
    padding += char;
  }
  
  return (side === "left") ? (padding + this) : (this + padding);
};

// example
var myString = "1001";
myString = myString.pad("left", "0", 8);
console.log(myString); // outputs "00001001"</code></pre>

Pad a string either left or right, to any length, with any character.

Just call this method on a string variable. Provide "left" or "right" as the first argument for which side you want to pad. The second argument is the character you want to pad the string with. The final argument is the length you want the string to be including the padding.
