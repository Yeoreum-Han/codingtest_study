// 큐
/*
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const queue = [];
const answer = [];
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let cmd = input[i].split(' ');
    switch (cmd[0]) {
        case 'push':
            queue.push(cmd[1]);
            break;
        case 'pop':
            answer.push(queue.shift() || -1);
            break;
        case 'size':
            answer.push(queue.length);
            break;
        case 'empty':
            answer.push(queue[0] ? 0 : 1);
            break;
        case 'front':
            answer.push(queue[0] || -1);
            break;
        case 'back':
            answer.push(queue[queue.length - 1] || -1);
            break;
    }
}

console.log(answer.join('\n'));