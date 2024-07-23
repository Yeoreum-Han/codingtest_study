// 최대공약수 최소공배수
// 최대공약수: 유클리드 알고리즘으로 (나머지가 0이 될 때까지 나누기)
// 최소공배수: 두 수 곱하고 최대공약수로 나누기

//24 18

// 6
// 72

const fs = require('fs');
const [n1, n2] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((x)=>parseInt(x));
let i= n1;
let j= n2;
while(i%j !==0){   // 나누어 떨어지지 않는동안
    let n = i%j;    // 최초의 나머지값
    if(n!==0){
        i=j;        // 나머지를 나머지로 계속 나누기 위해 각각 대입
        j=n;
    }
}
console.log(j)          // 최대공약수
console.log(n1*n2/j)    // 최소공배수