//팰린드롬수 - 문자열 뒤집기
/*
121     yes
1231    no  
12421   yes
0
*/

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.pop();

for(let i=0; i<input.length; i++){      
    let reverse = input[i].split("").reverse().join("");    
    console.log(input[i]===reverse ? "yes" : "no");
}

//input[i]의 문자열을 하나씩 나누어(split) 뒤집고(reverse) 다시 문자열로 합치기(join);