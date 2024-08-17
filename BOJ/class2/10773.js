// 제로 - 스택, 합계는 reduce로 계산
/*
첫 번째 줄에 정수 K가 주어진다. (1 ≤ K ≤ 100,000)
이후 K개의 줄에 정수가 1개씩 주어진다. 정수는 0에서 1,000,000 사이의 값을 가지며, 정수가 "0" 일 경우에는 가장 최근에 쓴 수를 지우고, 아닐 경우 해당 수를 쓴다.
정수가 "0"일 경우에 지울 수 있는 수가 있음을 보장할 수 있다.

10
1               7
3
5
4
0
0
7
0
0
6
 */
const fs = require('fs');
const [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const stack = [];

for(let i=0; i<N; i++){
  if(arr[i]===0) stack.pop();
  else stack.push(arr[i]);
}
const sum = stack.reduce((acc,cur)=>acc+cur,0);
console.log(sum);