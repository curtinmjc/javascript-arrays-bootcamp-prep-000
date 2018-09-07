var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
//  var newArray = array.unshift(element);
//  return newArray;
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(anArray, element) {
//  var newArray = anArray.unshift(element);
//  return newArray
  return array.unshift(element);
}

function addElementToEndOfArray(anArray, element) {
  anArray.push(element);
  return anArray
}

function destructivelyAddElementToEndOfArray(anArray, element) {
  var newArray = anArray.push(element);
  return newArray
}

function accessElementInArray(anArray, index) {
  return anArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(anArray) {
  anArray.shift();
  return anArray;
}
