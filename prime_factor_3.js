// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


var isPrime = function(num){
	var isPrime = true;
	if (num < 2){
		return false;
	}else if(num !== Math.round(num)){
		return false;
	}
	for (var i=2;i<num;i++){
		if(num%i === 0){
			return false;
		}
	}
	return isPrime
};


var user_number = prompt("What Number would you like to check?");

var prime_factors = function(number){
	
	var factor_array = [];

	for (var i=2; i<number;i++){
		if(number%i === 0){
			factor_array.push(i);
		}
	}

	// console.log("These are the factors for that number:  " + factor_array);

	var prime_factor_array = []

	for (var i = 0; i<= factor_array.length; i++){
		if(isPrime(factor_array[i])){
			prime_factor_array.push(factor_array[i]);
		}
	}

	// console.log("These are the prime factors for that number:  " + prime_factor_array);
	console.log("The largest prime factor of " + user_number + " is: " + Math.max.apply(Math, prime_factor_array));
};

prime_factors(user_number);