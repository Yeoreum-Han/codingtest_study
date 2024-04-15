//단어 정렬
/* 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다. 
13  
but                 i
i                   im  
wont                it
hesitate            no
no                  but
more                more
no                  wait
more                wont
it                  yours
cannot              cannot
wait                hesitate
im
yours
*/

let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let arr = [...new Set(input)];  // 중복 없애기
arr = arr.sort((a,b)=>a.length - b.length || a.localeCompare(b)).join('\n');    // localeCompare로 비교해서 사전순으로 정렬, 후 줄바꿈 문자열로 join
console.log(arr);
