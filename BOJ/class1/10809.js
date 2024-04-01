/*알파벳 찾기 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = [];

for(i=97; i<=122; i++){
    result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));

/* a~z 아스키코드로 for문   출력이 알파벳 순이라
input단어에 아스키코드i번이 있는지 indexOf로 확인
result 배열에 해당 인덱스값 넣음 
- indexOf() 값이 있으면 첫 인덱스를 반환하고 없으면 -1을 반환한다
z까지 돌고 result배열값을 join(' ')으로 문자열로 출력*/