function getAllPrimeFactors(n) {
    if (isNaN(n) || (! Number.isInteger(n)) || n <= 0) {
        return [];
    }

    if (n === 1) {
        return [1];
    }

    let result = [];
    let i = 2;
    let j = 2;
    let number = n;
    let isDivisible;

    for (; i <= number; i++) {
        isDivisible = number % i === 0;
        if (isDivisible) {
            result.push(i);
            number /= i;
        }
        while (isDivisible) {
            if (number % i === 0) {
                result.push(i);
                number /= i;
            } else {
                isDivisible = false;
            }
        }
    }

    return result;
}

function getUniquePrimeFactorsWithCount(n) {
    //    it will count number of occurrences of each element
    //    and add it to powers array
    let factors = [];
    let powers = [];
    let primes = getAllPrimeFactors(n);
    let i = 0;

    if (primes.length === 0) {
        return [[], []];
    }

    while (i < primes.length) {
        let actualElement = primes[i];
        let power = 0;
        for (let j = i; j < primes.length; j++) {
            if (primes[j] == actualElement) {
                power++;
                i++;
            } else {
                i = j;
                break;
            }
        }
        factors.push(actualElement);
        powers.push(power);
    }

  return [factors, powers];
}

function getUniquePrimeFactorsWithProducts(n) { 

    let result = [];
    let i = 0;
    let factorProduct;

    primes = getUniquePrimeFactorsWithCount(n);
    if (primes[0].length === 0 || primes[1].length === 0) {
        return result;
    }

    for(; i < primes.length; i++) {
        factorProduct = primes[0][i] ** primes[1][i];
        if (! Number.isNaN(factorProduct)) {
        result.push(factorProduct);
        }
    }

    return result;
}
