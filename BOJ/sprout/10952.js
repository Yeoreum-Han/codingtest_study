/*두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
입력의 마지막에는 0 두 개가 들어온다. */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
let result = '';
while(input[i] != '0 0'){
    let nums = input[i].split(' ');
    result += (parseInt(nums[0]) + parseInt(nums[1])) +'\n';
    ++i;
}
console.log(result);

/* 입력값이 0 0 일 때 처리조건 */