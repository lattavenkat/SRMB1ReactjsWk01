let n = [1,3,4,56,76,45,89,93,-23,-344,90,33,356,764,543,-345];
function isPrime(k){
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n != 1;
}

const prime = n.map((i) => {
    if (i > 0) {
        return i;
    }
}).filter((j) => {
    if(isPrime(j)){
        return j;
    }
});
console.log(`Original Number Array`)
console.log(n);
console.log(``);
console.log(prime);