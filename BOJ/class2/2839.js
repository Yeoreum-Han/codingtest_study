// 설탕배달
/*
봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다. 
상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오. */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);

let count = 0;
while (N > 0) {
    if (N % 5 === 0) N -= 5;
    else N -=3;
    count++;
}
console.log(N === 0 ? count : -1);