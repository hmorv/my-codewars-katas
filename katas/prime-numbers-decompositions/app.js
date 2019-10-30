function getAllPrimeFactors(n) {
    if (isNaN(n) || n <= 0 || (! Number.isInteger(n))) {
        return [];
    }

    if (n === 1) {
        return [1];
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
    let factors = [];
    let powers = [];
    let primes = getAllPrimeFactors(n);
    let i = 0

    if (primes.length === 0) {
        return [[], []];
    }

    while (i < primes.length) {
        let actualElement = primes[i];
        let counter = 0;
        for (let j = i; j < primes.length; j++) {
            if (primes[j] == actualElement) {
                counter++;
                i++;
            } else {
                i = j;
                break;
            }
        }
        factors.push(actualElement);
        powers.push(counter);
    }

  return [factors, powers];
}

function getUniquePrimeFactorsWithProducts(n) { 

    let result = [];

    primes = getUniquePrimeFactorsWithCount(n);
    if (primes[0].length === 0 || primes[1].length === 0) {
        return result;
    }

    for(let i = 0; i < primes.length; i++) {
        let product = primes[0][i] ** primes[1][i];
        if (Number.isNaN(product)) {
            product = 0;
        } else {
        result.push(product);
        }
    }

    return result;
}


console.log(getAllPrimeFactors(1));
console.log(getUniquePrimeFactorsWithCount(1));
console.log(getUniquePrimeFactorsWithProducts(1));
