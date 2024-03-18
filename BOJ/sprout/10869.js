/*두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10) 
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.*/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);

/*
js에서 몫을 구하려면 나누기 후 정수만 가져오기
Math.floor(a/b);  -> 소수점 내림

Math.ceil() 올림    Math.round() 반올림
*/