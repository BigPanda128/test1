//Ryan Postma
//question 6
//CMP237
//user input 4 items then edit all 4 items

var array = [];//create a new array

function map(array, transform) {//use map function to edit all the values in an array
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

//have the user enter in 4 numbers and each is pushed onto the array
print("enter a number please: ");
var input = readline();
array.push(input);

print("enter a number please: ");
var input = readline();
array.push(input);

print("enter a number please: ");
var input = readline();
array.push(input);

print("enter a number please: ");
var input = readline();
array.push(input);

//print out the array with all the values
print(array);

//print out the new mapped array where i multiplyed each value by 10
print(map(array, function(value) {
	return value * 10;
}));
