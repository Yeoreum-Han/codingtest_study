// 이항계수 1
// 자연수 N과 정수 K가 주어졌을 때 이항 계수를 구하는 프로그램을 작성하시오.

/* 이항계수 : n 개의 원소중에서 k 개를 순서에 상관없이 뽑았을 때 조합의 수
뽑거나 뽑지않는 두개의 선택만 존재  
n! / k!(n-k)! 으로 계산

팩토리얼 함수로 계산함
*/

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((x) => parseInt(x));
const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
}
console.log(factorial(N) / (factorial(K) * factorial(N - K)));