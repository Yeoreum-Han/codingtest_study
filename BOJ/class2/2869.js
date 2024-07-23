// 달팽이 올라가기  - 시간복잡도 유의!!!!

const fs = require('fs');
const [a, b, v] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.ceil((v-b)/(a-b)));