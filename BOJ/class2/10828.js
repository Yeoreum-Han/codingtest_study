// 스택 - switch-case로 명령어 구별
/*
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오. 
14
push 1              2
push 2              2  
top                 0
size                2
empty               1
pop                 -1
pop                 0
pop                 1
size                -1
empty               0
pop                 3
push 3
empty
top
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const result = [];

const N = input.shift();

for (let i = 0; i < N; i++) {        
    switch(input[i]) {
        case 'pop': 
          result.push(stack.pop() || -1);       
          break;

        case 'size': 
          result.push(stack.length);
          break;

        case 'empty': 
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': 
          result.push(stack[stack.length - 1] || -1);
          break;

        default: 
          stack.push(input[i].split(" ")[1]);           // x값을 스택에 넣기
          break;
    }
}

console.log(result.join('\n'));