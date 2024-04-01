/* 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.
입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

10 10
9 25
*/

let [H, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>Number(x));

if(M<45){
    M += 60-45;
    if(H!=0) H--;
    else H = 23;
} else {
    M -= 45;
}

console.log(H+' '+M);