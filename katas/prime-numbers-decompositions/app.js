function getAllPrimeFactors(n) { 
    let result = [];

    for (let i = 2; i < n; i++) {
        let isPrime;
        if (n % i === 0) {
            isPrime = true;
            for (let j = 2; j <= i; j++) {
                //isPrime = (i % j === 0) ? false : true;
                if (i % j === 0) {
                    isPrime == false;
                }
            }
        }

        if (isPrime == true) {
            result.push(i);
        }
    }

    return result;

}

function getUniquePrimeFactorsWithCount(n) { 
}

function getUniquePrimeFactorsWithProducts(n) { 
}


console.log(getAllPrimeFactors(40));
