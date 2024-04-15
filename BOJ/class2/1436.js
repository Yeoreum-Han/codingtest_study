// 영화감독 숌
/*
종말의 수란 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수를 말한다. 제일 작은 종말의 수는 666이고, 그 다음으로 큰 수는 1666, 2666, 3666, .... 이다. 따라서, 숌은 첫 번째 영화의 제목은 "세상의 종말 666", 두 번째 영화의 제목은 "세상의 종말 1666"와 같이 이름을 지을 것이다. 일반화해서 생각하면, N번째 영화의 제목은 세상의 종말 (N번째로 작은 종말의 수) 와 같다.

1           6           187
1666        5666        66666
*/

let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());
let num = 666;
let count = 1;

while(count !== input){
    num++;
    if(String(num).includes("666")) count++;
}
console.log(num);

// 최소값 666에서 시작해서 input번째 666이 들어가는(include) 숫자 찾을 때 까지 반복