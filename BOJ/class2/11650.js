// 좌표 정렬하기
/*
2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오. 

5
3 4         1 -1
1 1         1 1
1 -1        2 2
2 2         3 3
3 3         3 4
*/

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((x) => x.split(' ').map((el) => Number(el)));
let result = arr.sort((a, b) => {               // sort시 조건문으로 [0]값이 같을 때 처리
    if (a[0] === b[0]) return a[1] - b[1];      // 같으면 [1]값으로 오름차순 정렬
    else return a[0] - b[0];                    
})
    .map((x) => x.join(' ')).join('\n');        // [[1,1],[2,2]] 상태이므로 join 두번사용

console.log(result);