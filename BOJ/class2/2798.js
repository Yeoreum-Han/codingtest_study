// 블랙잭 - 브루트포스
// 5 21             결과 : 21
// 5 6 7 8 9

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const totals = input[0].split(' ');
const cardTotal = parseInt(totals[0]);
const numTotal = parseInt(totals[1]);
const cards = input[1].split(' ').map((x)=>parseInt(x));
let result=0;

for(let i=0; i<cardTotal; i++){     // 총 카드 중에서  0번째부터
    for(let j=i+1; j<cardTotal; j++){       // 1번째부터
        for(let z=j+1; z<cardTotal; z++){   // 2번째부터
            let sum = cards[i]+cards[j]+cards[z];   
            if(numTotal-sum>=0 && result<=sum) result = sum;     // 세 숫자합이 목표값보다 작고, 최고값으로 갱신
        }
    }
}
console.log(result);