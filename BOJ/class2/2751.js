// 수 정렬하기2     
// console.log로 하나씩 하면 시간초과, join('\n')으로 한번에 묶은 뒤 console.log로 출력
/*
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다. 
5
5       1
4       2
3       3
2       4
1       5
*/

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.sort((a,b)=>a-b);
console.log(input.join('\n'));

