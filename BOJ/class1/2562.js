/*9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
3
29
38
12
57
74
40
85
61

85
8
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>Number(x));
let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max)+1);

/*input받으면서 map으로 숫자로 변환
Math.max()로 최댓값구하고 
arr.indexOf(max)로 해당값의 인덱스 찾기
0부터 시작하니까 +1로 몇번째인지 확인*/