// 스택 수열
/* 
임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 
있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 
이를 계산하는 프로그램을 작성하라.

8
4
3
6
8
7
5
2
1

+
+
+
+
-
-
+
+
-
+
+
-
-
-
-
-
*/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
let stack =[];
let result='';
let j = 1;                      

for(let i=0; i<N; i++){             // input[i]일 때까지 stack에 하나씩 넣고, input[i]가 되면 pop
    
    while(j<=input[i]){			    // input[0]=4인 경우 j(=1)부터 4까지 stack에 넣으면서 + 추가
        stack.push(j);        
        result +='+ ';
        j++;
    }

    let num = stack.pop();          // input[i]===j가 되면 pop하면서 - 를 추가할 건데
    if(num !== input[i]){           // 혹시 'No'가 되는 경우인 지 확인
        result = "NO";
        break;
    }
    result +='- ';
}
console.log(result.split(' ').join('\n'));