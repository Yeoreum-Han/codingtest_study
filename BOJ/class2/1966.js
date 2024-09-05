// 프린터 큐
/*
현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 
이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 그렇지 않다면 바로 인쇄를 한다.

첫 줄에 테스트케이스의 수가 주어진다. 각 테스트케이스는 두 줄로 이루어져 있다.

테스트케이스의 첫 번째 줄에는 문서의 개수 N(1 ≤ N ≤ 100)과, 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수 M(0 ≤ M < N)이 주어진다. 이때 맨 왼쪽은 0번째라고 하자. 
두 번째 줄에는 N개 문서의 중요도가 차례대로 주어진다. 중요도는 1 이상 9 이하의 정수이고, 중요도가 같은 문서가 여러 개 있을 수도 있다.

3                           
1 0                         1
5                           2
4 2                         5
1 2 3 4
6 0
1 1 9 1 1 1

*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = input.shift();              // 3

let result = [];

for(let i=0; i<parseInt(caseNum); i++){
    let [N, M] = input.shift().split(' ').map(Number);          // [4, 2]
    let priority = input.shift().split(' ').map(Number);        // [1, 2, 3, 4]
    let count = 1;                                              // 몇번째로 출력되는지

    while(true){
        let max = Math.max(...priority);                        // 4
        let cur = priority.shift();

        if(cur>= max && M === 0){                               // 현재의 값이 가장 중요도 큰 값 이상이고 && 0번째의 수를 찾을 때
            result.push(count);
            break;
        }
        else if(cur<max && M === 0){                            // 현재 값이 가장 중요도 큰 값 이하 && 0번째의 수를 찾을 때
            priority.push(cur);                                 // 현재 값을 큐(priority)의 맨 뒤로 보내고
            M = priority.length - 1;                            // M의 위치를 (맨 뒤로) 수정
        }
        else if (cur >= max){                                   // 현재의 값이 가장 중요도 큰 값 이상
            count++;                                            // 출력된 걸로 치고 count++
            M--;                                                // 큐에서 하나 빠졌으니 M의 위치도 한 칸 앞으로 당겨짐
        }
    }
}
console.log(result.join('\n'));