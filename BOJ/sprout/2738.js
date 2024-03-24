/* 행렬덧셈
N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오. 
첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.split(' ').map(Number));

const [n, m] = input.shift();   //첫줄 입력값만 따로 저장하기

let arr = new Array(n).fill().map(()=> new Array(m).fill(0));   //이차원 빈 배열 생성

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        arr[i][j] = input[i][j] + input[i+n][j];
    }
}
// 이차원 배열끼리 바로 더해서 생성한 빈 배열 arr에 저장
// 두번째 배열은 입력값기준 i+n번째 줄부터 시작

let result = '';

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[0].length; j++){
        result += arr[i][j] + ' ';
    }
    result += '\n';
}
// 배열을 하나씩 출력
console.log(result.trim());

