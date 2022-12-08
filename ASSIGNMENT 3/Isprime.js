
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
        let nxtPrime=nextPrime(number)             // function is used to find next prime number is given number is prime
        console.log(nxtPrime+number);  //Final Output is printed here 


    } else {
        console.log(`${number} is not a prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

function nextPrime(N)
{
 
    if (N <= 1)
        return 2;
 
    let prime = N;
    let found = false;
 
    while (!found) {
        prime++;
 
        if (isPrime(prime))
            found = true;
    }
 
    return prime;
}
