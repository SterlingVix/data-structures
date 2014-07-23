var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //someInstance.size = 0;
  var size = 0;
  
  
  

  // Implement the methods below
  someInstance.push = function(value){
    if (typeof value !== 'string') {
      console.log("Error! var value of " + value + " is not a string.");
      return false;
    }
    size++; // increment size tracker
    storage[size] = value;
    return true; // push is successful
  };

  someInstance.pop = function(){
    if (size === 0) {
      console.log("Error! Attempting to pop from empty stack.");
      return false;
    }
    var result = storage[size];
    storage[size] = null;
    size--; // decrement size
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};