// 팩토리얼 0의 개수
//N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오. (0<=N<=500)
// 10       2

/* 팩토리얼 결과값의 뒷자리가 0이 나오려면 x10 인 경우가 있어야함 
=> 즉, 2와 5가 곱해지는 경우인데, 최소값을 구하려면 5의 배수를 세야함
*/
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
let count =0;
for(let i=5; i<=input; i*=5){
    count += Math.floor(input/i);
}
console.log(count);