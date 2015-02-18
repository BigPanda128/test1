//Ryan Postma
//question 2 code
//CMP237
var x = 5;
var y = 3;

//first function written one way
function change1(number) {//edits the x variable
	x = number + 4;
	return x;
}

//second function written the other way
var change2 = function (number) {//edits y variable
	y = number + 2;
	return y;
}

print(change1(x));
print(change2(y));

