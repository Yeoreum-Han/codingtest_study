/*두 서브도메인의 유명도가 주어졌을 때, 그 차이를 구하는 프로그램을 작성하시오.
첫째 줄에 두 도메인의 유명도 N과 M이 주어진다. (-2,000,000,000 ≤ N, M ≤ 2,000,000,000)
첫째 줄에 두 유명도의 차이 (|N-M|)을 출력한다. */

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const x = parseInt(input[0]);
const y = parseInt(input[1]);

console.log(Math.abs(x-y));

/* Math.abs() 절대값 구하기 */