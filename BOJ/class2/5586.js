// JOI와 IOI - slice(i, i+3)으로 단어 확인
/*
첫째 줄에 문자열에 포함되어 있는 JOI의 개수, 둘째 줄에 IOI의 개수를 출력한다.
JOIJOI      2
            0
JOIOIOIOI   1
            3
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let joi=0;
let ioi=0;

for(let i=0; i<input.length; i++){
  if(input.slice(i,i+3)==='JOI') joi++;
  else if(input.slice(i,i+3)==='IOI') ioi++;
}
console.log(joi);
console.log(ioi);