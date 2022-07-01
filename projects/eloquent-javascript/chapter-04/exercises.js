////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  var output = [];
  if(start === end) {
    return output;
  }
  if(step > 0) {
  for (var i = start; i <= end; i += step) {
      output.push(i);
    } 
  }else{
    for (var i = start; i >= end; i += step) {
      output.push(i);
    }
  }
return output;
};
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  newArray = [];
  for (var i = array.length -1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
       var temp = array[i];
      array[i] = array[array.length-1-i];
      array[array.length-1-i] = temp;

    }

    return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if(typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  if(typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  var xKeys = Object.keys(x);
  var yKeys = Object.keys(y);
  for (var i = 0; i < xKeys.length; i++) {
    if(!yKeys.includes(xKeys[i]) || deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
