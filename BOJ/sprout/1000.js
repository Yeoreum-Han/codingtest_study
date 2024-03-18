/*두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10) */

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);

/* 
node.js 입력값 받기 (readline모듈, fs모듈)
fs모듈로 빠르게처리
.readFileSync('/dev/stdin')  ->  동기적으로, '표준입력값'을 받아 파일읽기
.toString()     ->  buffer객체로 받은 내용을 문자열로 변환
.split(' ')     -> 공백을 기준으로 문자열 나누고 배열 리턴
.parseInt()     -> 문자열 숫자로 변환
*/