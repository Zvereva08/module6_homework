function Numer (n) {
if (!Number.isInteger(n) || n < 2 || n > 1000) console.log ("ошибка");
let k = Math.sqrt(n);
for (let i = 2; i <= k; i++)
if (n % i === 0) console.log ("не простое число");
console.log ("простое число");
}
console.log(isPrime(7));
