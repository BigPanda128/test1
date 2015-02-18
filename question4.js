//Ryan Postma
//CMP237
//question 4

//create a basic function
function doSomthing(number) {//pass it a parameter
	var count = number;//add the parameter to count
	function doSomthingElse() {//give another function inside of the first one
		var exclusiveCount = count * 5;//create a new variable to show nested scope and give it a number
		return exlusiveCount;//return nest scope varialbe
	}//end doSomthingElse
	return count = exclusiveCount;//this line will not be able to find exlusiveCount due to it being nested in the funtion above
}//end doSomthing

//make a random variable
var x = 2;

//run function
print(doSomthing(x));
