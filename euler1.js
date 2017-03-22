var numberToCheck = 1000;

function multiples(number, multiplier){

  var divider = Math.floor(number/multiplier);

  var multiples = [];
  var j = 0;

  for (var i = 0; i < divider; i++) {
    j = j + multiplier;
    multiples.push(j);
  }

  return multiples;
}

function sumUpArray(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sumUpArray(multiples(numberToCheck, 3)) + sumUpArray(multiples(numberToCheck, 5)));
