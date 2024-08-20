// 준영이의 등급  - 등급컷을 기준으로 백분율 배열만들고 계산
/*
첫째 줄에 학생의 수 N과 과목의 수 K가 공백으로 구분되어 주어진다.
둘째 줄에 K개의 수 G1,G2,G3...가 공백으로 구분되어 주어진다.
입력으로 주어지는 모든 수는 정수이다.

첫째 줄에 각 과목별 준영이의 등급을 의미하는 K개의 정수 D1,D2,D3...를 공백으로 구분하여 출력하라.

255 5                   2 3 3 1 3
30 37 50 7 35
*/

const [[N, K], G] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.split(' ').map(Number));
const grade = [4, 11, 23, 40, 60, 77, 89, 96, 100];     // 등급컷
const D = [];                                           // 백분율배열
let d = 0;
grade.forEach((v, i) => {                               // 백분율계산   
    for (let k = d; k <= v; k++) {
        D.push(i + 1);
    }
    d = v + 1;
});
console.log(G.map((v) => D[Math.floor((v * 100) / N)]).join(' '));      // 성적들 등급[백분율] 계산 후 join