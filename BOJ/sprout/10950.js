/*두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10) */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = parseInt(input[0]);

for (i = 1; i <= t; i++) {
    let nums = input[i].split(' ');
    console.log(parseInt(nums[0])+parseInt(nums[1]));
}
