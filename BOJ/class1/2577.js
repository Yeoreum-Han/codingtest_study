/* 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
150
266
427

3
1
0
2
0
0
0
2
0
0
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = String(input[0] * input[1] * input[2]);
for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < num.length; j++) {
        if (Number(num[j]) === i) {
            count++;
        }
    }
    console.log(count);
}

/* 세 수의 곱을 string으로 변환해 순환하기
숫자 0~9일때 num[j]요소가 숫자i와 같은 지 확인하고 count++ 
바로 log찍고 count는 숫자바뀔 때마다 매번 초기화*/

