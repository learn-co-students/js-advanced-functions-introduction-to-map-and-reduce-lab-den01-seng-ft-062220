// Your code here

const mapToNegativize = (sourceArray) => {
  let newArray = [];
  sourceArray.forEach(number => {
    newArray.push(number * -1);
  })
  return newArray;
}

const mapToNoChange = (sourceArray) => {
  return sourceArray;
}

const mapToDouble = (sourceArray) => {
  let newArray = [];
  sourceArray.forEach(number => {
    newArray.push(number * 2);
  })
  return newArray;
}

const mapToSquare = (sourceArray) => {
  let newArray = [];
  sourceArray.forEach(number => {
    newArray.push(number * number);
  })
  return newArray;
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
  sourceArray.forEach(number => {
    startingPoint += number;
  })
  return startingPoint;
}

// const reduceToAllTrue = (sourceArray) => {
//   sourceArray.forEach(entry => {
//     if (!entry){
//       console.log(entry);
//       return false;
//     }
//   })
//   return true;
// }

const reduceToAllTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++){
    if (!sourceArray[i]){
      return false;
    }
  }
  return true;
}

// const reduceToAnyTrue = (sourceArray) => {
//   sourceArray.forEach(entry => {
//     if (entry){
//       return true
//     }
//   })
//   return false
// }

const reduceToAnyTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}