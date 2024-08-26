// 준석이의 사탕사기 - 그리디. 합이 짝수가 되는 최대 값 (짝수 = 짝 + 짝 || 홀 + 홀)
/*
첫째 줄에 사탕 묶음의 개수 N이 주어진다. 
둘째 줄에 각각의 사탕 묶음에 담겨있는 사탕의 개수가 주어진다. 
총 짝수 개의 사탕을 가져가려고 한다. 
준석이를 위해서 최대로 가져갈 수 있는 사탕의 개수를 구해주자!

5
8 3 6 7 5           26

1
5                   0
*/

const [N, candy] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.split(' ').map(Number));

let odd = [];                       
let sum = 0;

for (const c of candy) {            
    if (c % 2 === 0) sum += c;      // 짝수는 바로 합계에 더하고
    else odd.push(c);               // 홀수는 따로 odd배열에 모아두기
}

odd.sort((a, b) => b - a);          // 홀수 큰 것부터 정렬

if (odd.length % 2 === 0) {         // 홀수들이 짝수개 있으면 홀 + 홀 = 짝이니까 바로 합계에 더하기
    for (const o of odd) { 
        sum += o; 
    }
} else {                            // 홀수들이 홀수개 있으면 가장 작은 수 하나 제거하고 나머지 합계에 더하기
    odd.pop();
    for (const o of odd) { 
        sum += o; 
    }
}
console.log(sum);