// 숫자 카드 2  - reduce로 객체 만들기
/*
10
6 3 2 10 10 10 -10 -10 7 3      가진 카드
8
10 9 -5 2 3 4 5 -10

3 0 0 1 2 0 0 2
*/

const fs = require('fs');
let [N, cardN, M, cardM] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrN = cardN.split(' ').map(Number).reduce((acc, cur) => {        
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});   // { '2': 1, '3': 2, '6': 1, '7': 1, '10': 3, '-10': 2 }

const result = cardM.split(' ').map(Number).map(v => arrN[v] ? arrN[v] : 0).join(' ');
console.log(result);