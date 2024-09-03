// Alex Origami Squares - 직사각형을 정사각형으로 나누기

/*
210 297         105.0
250 100         83.333333
*/


const [h, w] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => b - a);

const a = h;
const b = w;

const l1 = a / 3 <= b ? a / 3 : b;
const l2 = b / 2;

console.log(Math.max(l1, l2));