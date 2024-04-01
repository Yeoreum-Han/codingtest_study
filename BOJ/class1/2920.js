/* 첫째 줄에 8개 숫자가 주어진다. 이 숫자는 문제 설명에서 설명한 음이며, 1부터 8까지 숫자가 한 번씩 등장한다.첫째 줄에 ascending, descending, mixed 중 하나를 출력한다.

1 2 3 4 5 6 7 8
ascending
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const result = {
    '1 2 3 4 5 6 7 8' : 'ascending',
    '8 7 6 5 4 3 2 1' : 'descending'
}[input];

console.log(result || 'mixed');

//ascending,descending이 되는 경우가 하나씩밖에 없어서 객체로 풀기
//객체에 없는 입력값이면 mixed