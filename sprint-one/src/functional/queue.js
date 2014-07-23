var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //someInstance.size = 0;
  var size = 0;
  //var lastIn = 0; // if I want to track "size" and keys separately...
  var location = 1; // to track location of growing stack
  /* var resize() = function() {
    resize stack after certain point...
  } */
  var queueThreshold = 256; // double this every time it's met if resizing...
  
  // Implement the methods below
  someInstance.enqueue = function(value){
    if (typeof value !== 'string') {
      console.log("Error! var value of " + value + " is not a string.");
      return false;
    }
    // IF RESIZING: if (size === queueThreshold) ...
    
    size++; // increment size tracker
    storage[size] = value;
    return true; // push is successful
  };

  someInstance.dequeue = function(){
    if (location > size) {
      console.log("Error! Attempting to dequeue from empty queue.");
      return false;
    }
    var result = storage[location];
    storage[location] = null;
    location++; // increase location
    return result;
  };

  someInstance.size = function(){
    return size - location;
  };

debugger;
  return someInstance;
};