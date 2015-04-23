// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.	


x = 0

for (var i=1;i<1000;i++){
	if((i%5 === 0) || (i%3 ===0)){
		x = x + i;
	}
}

console.log(x);


// var range = []
// for (var i = 1; i<1000;i++){
// 	range.push(i);
// }


// THIS IS A MUCH MORE COMPLEX WAY OF SAYING WHAT I SAID UP THERE
// if ((i%5 === 0) && (i%3 === 0)){
// 	y = y+i;
// }else if(i%5 === 0){
// 	x = x +i;
// }else if(i%3 === 0){
// 	x = x + i;
// }

	//End