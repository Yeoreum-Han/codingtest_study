// 덩치
/*
두 사람 A 와 B의 덩치가 각각 (x, y), (p, q)라고 할 때 x > p 그리고 y > q 이라면 우리는 A의 덩치가 B의 덩치보다 "더 크다"고 말한다.

5
55 185      2 2 1 2 5
58 183      
88 186      
60 175      
46 155      
*/

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>x.split(' ').map((el)=>Number(el)));
let result = [];
for(let i=0; i<N; i++){         // 2차원 배열을 하나씩 검사해야하므로 이중for문
    let count = 1;              // 매 검사시 1등으로 초기화
    for(let j=0; j<N; j++){
        if(i!==j){              
            if(input[i][0] < input[j][0] && input[i][1] <input[j][1]) count++;      
            // input[0][0] input[1][0] 으로 몸무게 비교 && input[0][1] input[1][1]로 키 비교
            // 작을때마다 등수가 뒤로 밀려나야함 => count++
        }
    }
    result.push(count);     // A의 등수 저장
}
console.log(result.join(' '));
