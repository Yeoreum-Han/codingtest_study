// 균형잡힌 세상 - 스택 9012번 참고
/*
각 문자열은 마지막 글자를 제외하고 영문 알파벳, 공백, 소괄호("( )"), 대괄호("[ ]")로 이루어져 있으며, 온점(".")으로 끝나고, 길이는 100글자보다 작거나 같다.
입력의 종료조건으로 맨 마지막에 온점 하나(".")가 들어온다. 

So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.

yes
yes
no
no
no
yes
yes
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    const stack = [];
    let result = true;

    for (let j = 0; j < input[i].length; j++) {   //input의 첫번째 줄 문자열 하나씩 확인

        if (input[i][j] === '[' || input[i][j] === '(') {   // [ 또는 ( 일 때
            stack.push(input[i][j]); 
        } else if (input[i][j] === ']') {                   // ] 일 때
            if (stack[stack.length-1]==='['){               // 최근 입력이 [ 인지 확인
                stack.pop();
            } else {
                result=false;
                break;
            }
        } else if (input[i][j] === ')') {                   // ) 일 때
            if(stack[stack.length-1]==='('){                // 최근 입력이 ( 인지 확인
                stack.pop();
            }else{
                result=false;
                break;
            }   
        } else if(input[i][j]==='.') break;                 // . 일 때
    }

    if (stack.length !== 0) result = false;                 // 스택에 뭐가 남아있으면 false

    if (result === false) console.log('no');
    else console.log('yes');
}