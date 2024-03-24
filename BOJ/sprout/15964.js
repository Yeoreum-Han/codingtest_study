/*이상한기호
연산자의 기호는 ＠으로, A＠B = (A+B)×(A-B)으로 정의내리기로 했다.
효진이를 도와 정수 A, B가 주어지면 A＠B를 계산하는 프로그램을 만들어주자!
첫째 줄에 A, B가 주어진다. (1 ≤ A, B ≤ 100,000) */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const a = input[0];
const b = input[1];

console.log((a+b)*(a-b));