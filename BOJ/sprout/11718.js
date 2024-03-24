/* 그대로 출력하기
입력 받은 대로 출력하는 프로그램을 작성하시오. */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';
for(i=0; i<input.length; i++){
    result += input[i] + '\n';
}
console.log(result.trim());