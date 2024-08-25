// Chili Peppers - map으로 칠리 종류와 스코빌 지수 맵핑
/*
칠리 종류와 스코빌 지수가 적힌 테이블이 있다. 사용한 칠리들의 스코빌 지수의 합은?

4               118000
Poblano
Cayenne
Thai
Poblano

*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift();
const chili = ['Poblano', 'Mirasol', 'Serrano', 'Cayenne', 'Thai', 'Habanero'];
const shu = [1500, 6000, 15500, 40000, 75000, 125000];

let map = new Map();
for (let i = 0; i < 6; i++) {
    map.set(chili[i], shu[i]);
}

let sum = 0;

for (i of input) {
    sum += map.get(i);
}

console.log(sum);