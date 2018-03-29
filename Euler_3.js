//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

//Solution -1
/*var factor=2;
listPrimes=[];
function getPrime(number){
    while (factor<number){
        if (number%factor === 0){
            number /= factor;
        }
        else {
            factor.push=listPrimes;
            factor++;
        }
    }
    return listPrimes;
}

console.log( getPrime(13195)); */

factors=[];
function primeNums(number){
    for (var i=2;i<=number;i++){
        if (number%i === 0){
            factors.push(i);
            number /= i;
            i++;
        }
    }
    return factors;
}


console.log(primeNums(13195));