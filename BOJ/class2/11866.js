// 요세푸스 문제 0  - 배열로 푸는방법
/*
첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 1,000)
7 3         <3, 6, 2, 7, 5, 1, 4>  */

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = Array.from({length: N}, (v,i) => i+1); // 길이가 N인 배열 생성
const result = [];

let count = 1;                  // 첫번째 요소부터 검사하기위해 1부터시작
while(arr.length){              // 배열의 길이동안 검사
    let data = arr.shift();     // 맨 앞 요소만 빼서 다시 arr에 넣을지 result배열에 넣을지
    if(count % K === 0) result.push(data);  // K번째 요소인 경우 === K의 배수인 경우
    else arr.push(data);                    // count번째 요소가 K의 배수면 result배열로, 아니면 원래있던 배열로
    count++;                    // 다음 요소로 넘어가기
}   // 원형상태로 연결되어 있기 때문에 arr 배열의 요소가 없어질 때까지 돌리려면 while문. (count수가 N을 넘어가도 상관 X)

console.log(`<${result.join(', ')}>`);
