var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(anArray, element) {
  anArray.unshift(element);
  return anArray
}

function destructivelyAddElementToBeginningOfArray(anArray, element) {
  var newArray = anArray.unshift(element);
  return newArray
}
