// 직각삼각형 a^2 + b^2 = 긴변^2
//입력값 중에서 제일 큰 값 찾기 sort

// let input = [[6,8,10],[25,52,60],[5,12,13],[0,0,0]];
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((i)=>i.split(" ").map(Number));

for(let i=0; i<input.length-1; i++){    // for로 배열 하나씩 계산
    input[i].sort((a,b)=>a-b);          // sort로 작은숫자부터 정렬
    [a,b,c]= input[i];                  // 편의를 위해 대입
    a**2 + b**2 === c**2 ? console.log("right") : console.log("wrong");
}