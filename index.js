const createMapTo  = (multiplier) => {
  return function mapTo(array, i = 0) {
    array[i] = array[i] * multiplier;

    return array[i + 1] ? mapTo(array, i + 1) : array;
  };
};

const mapToNegativize = createMapTo(-1);

const mapToNoChange = createMapTo(1);

const mapToDouble = createMapTo(2);

const mapToSquare = (array, i = 0) => {
  array[i] = array[i]**2;
  return array[i + 1]
    ? mapToSquare(array, i + 1)
    : array;
};

const reduceToTotal = (array, startingPoint = 0) => {
  return array[0] 
    ? startingPoint + array[0] + reduceToTotal(array.slice(1))
    : 0;
};

const reduceToAllTrue = (array) => {
  if (array[0] === undefined) { return true; }
  return !!array[0]
    ? reduceToAllTrue(array.slice(1))
    : false;
};

const reduceToAnyTrue = (array) => {
  if (array[0] === undefined) { return false; }

  return array[0] === true
    ? true
    : reduceToAnyTrue(array.slice(1));
};
