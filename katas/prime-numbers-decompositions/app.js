function getAllPrimeFactors(n) {
    if (isNaN(n) || n <= 0 || (! Number.isInteger(n))) {
        return [];
    }

    let result = [];
    let i = 2;
    let j = 2;
    let number = n;

    for (; i <= number; i++) {
        let isPrime = number % i === 0;
        if (isPrime) {
            result.push(i);
            number /= i;
        }
        while (isPrime) {
            if (number % i === 0) {
                result.push(i);
                number /= i;
            } else {
                isPrime = false;
            }
        }
    }

    return result;
}

function getUniquePrimeFactorsWithCount(n) {
    primes = getAllPrimeFactors(n);
    if (primes.length === 0) {
        return [[], []];
    }
}

function getUniquePrimeFactorsWithProducts(n) { 
    primes = getAllPrimeFactors(n);
    if (primes.length === 0) {
        return [];
    }
}


console.log(getAllPrimeFactors(100));
