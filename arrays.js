var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(anArray, element) {
  anArray.unshift(element);
  return anArray
}

function destructivelyAddElementToBeginningOfArray(anArray, element) {
  var newArray = anArray.unshift(element);
  return newArray
}

function addElementToEndOfArray(anArray, element) {
  anArray.push(element);
  return anArray
}

function destructivelyAddElementToEndOfArray(anArray, element) {
  var newArray = anArray.push(element);
  return newArray
}
