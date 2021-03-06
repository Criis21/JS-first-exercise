let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function () { }];
let nothing = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];



//Array filter

function clearData(array) {
  let newArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (typeof array[i] === 'string') {
      newArray.push(array[i]);
    }
  }
  return array;
}
console.log(clearData(surnames));
console.log(clearData(escuses));
console.log(clearData(nothing));



//First exercise
//You need to created another function that counts the number of repetitions of letters in each array

function CountNumber(array) {
  let response = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= (array[i].length) - 1; j++) {
      if (response.hasOwnProperty(array[i][j])) {
        response[array[i][j]] += 1;
      }
      else {
        response[array[i][j]] = 1;
      }
    }
  }
  return (response);
}

console.log(CountNumber(surnames));
console.log(CountNumber(escuses));
console.log(CountNumber(nothing));




//Second exercise
//Function that inverts all values of the array

function revertValuesOfAnArray(array) {
  let response = [];
  for (let i = 0; i < array.length; i++) {
    let str = '';
    for (let j = (array[i].length) - 1; j >= 0; j--) {
      str += array[i][j];
      console.log(array[i][j]);
    }
    response.push(str)
  }
  return response;
}



console.log(revertValuesOfAnArray(surnames));
console.log(revertValuesOfAnArray(escuses));
console.log(revertValuesOfAnArray(nothing));





//Third exercise
//Suppress repetitions in an array and return the array without the repetition

const deleteRepetitions = (array) => {
  let repetition = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array[i].length); j++) {
      if (array[i] === array[j]) {
        repetition.push(array[i][j]);
      }
    }
  }
  return repetition;
}
console.log(deleteRepetitions(surnames));
console.log(deleteRepetitions(escuses));
console.log(deleteRepetitions(nothing));




