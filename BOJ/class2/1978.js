// 소수찾기

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let size = Number(input.shift());
let arr = input[0].split(' ').map((i) => Number(i));

function isPrime(n) {
    if (n == 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const answer = arr.filter(num => isPrime(num)).length;
console.log(answer);

//filter() 각 요소에 callback함수를 실행하고 결과가 true인 요소들로 새로운 배열을 만들어 리턴