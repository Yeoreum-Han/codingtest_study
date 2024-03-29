/* 
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다.
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다.

2
3 ABC
5 /HTP

AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let result = '';

for(let i=1; i<=T; i++){
    let R = Number(input[i].split(' ')[0]);
    let S = input[i].split(' ')[1];

    for(let j=0; j<S.length; j++){
        for(let k=0; k<R; k++){
            result += S[j];
        }
    }
    result += '\n';
}
console.log(result);

/* T를 구하고,
for로 input을 순회하는데, 우선 R과 S구하기,
중첩for로 S를 R만큼 반복하기 */

/* 또는 repeat()로 S를 R만큼 반복하기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input.shift());
for(let i=0; i<T; i++){
    let result = '';
    const [R,S] = input[i].split(' ');
    for(let j=0; j<S.length; j++){
        result += S[j].repeat(R);
    }
    console.log(result);
}
*/