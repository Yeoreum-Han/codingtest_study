// 좌표 정렬하기 2
/*
2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

5
0 4     1 -1
1 2     1 2
1 -1    2 2
2 2     3 3
3 3     0 4
*/

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((x)=>x.split(' ').map((el)=>Number(el)));
const result = arr.sort((a,b)=>{
    if(a[1]===b[1]) return a[0] - b[0];
    else return a[1] - b[1];
}).map((x)=>x.join(' ')).join('\n');
console.log(result);