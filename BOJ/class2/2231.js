// 분해합은 256(=245+2+4+5)이 된다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const m = parseInt(input);
for(let n=0; n<m; n++){    // 찾아야하는 수 = n, n은 m보다 작아야만
    let sum = n;            // 합계는 n
    n_str = n.toString();   // 숫자를 string으로 변환 (그래야 하나씩 덧셈가능)
    let length = n_str.length;  // 길이확인
    for(let i=0; i<length; i++){     // n의 길이만큼 하나씩 덧셈하기위해 for  2+3+4
        sum += parseInt(n_str[i]);
    }
    if(m===sum){
        console.log(n)
        break;
    }
    if(n===m-1){
        console.log(0);
    }
}