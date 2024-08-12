// 괄호
/*
 (는 push, )는 pop으로 빈 stack에 pushpop. stack에 요소가 남아있다면 (,)개수 안맞은 상황이므로 false, 아니면 true 
 */

const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= parseInt(inputs[0]); i++) {
    const stack = []
    let result = true
    for (let j = 0; j < inputs[i].length; j++) {
        if (inputs[i][j] === '(')
            stack.push(inputs[i][j])
        else if (inputs[i][j] === ')') {
            if (!stack.pop()) {
                result = false
            }
        }
    }
    if (stack.length !== 0) {
        result = false
    }


    if (result == false)
        console.log('NO')
    else
        console.log('YES')
}
