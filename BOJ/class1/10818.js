/*주어진 정수의 최솟값과 최댓값
5
20 10 35 30 7

7 35
*/

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = Number(input.shift());
let arr = input.toString().split(' ').map(x=>Number(x));
arr.sort((a,b)=>a-b);
console.log(arr[0]+' '+arr[caseNum-1]);

//split메서드는 String타입에만 가능함에 유의