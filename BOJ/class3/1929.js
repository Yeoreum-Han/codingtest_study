// 소수 구하기 - 에라토스테네스의 체
/*
에라토스테네스의 체 :
2부터 소수를 구하고자 하는 수 까지 나열한다.
2는 소수이므로 자기 자신을 제외한 2의 배수들을 모두 지운다.
3은 소수이므로 자기 자신을 제외한 3의 배수들을 모두 지운다.
이를 반복해서 남은 숫자들은 소수가 된다.

e.g) 2부터 120까지 구하려면 제곱이 120보다 큰 11까지만 비교하면 된다.
2-> 2의배수 지움 -> 3 -> 3의배수 지움 -> 5-> 5의배수 지움-> 7 -> 7의배수 지움 -> 11 -> 11 이후로 남은 소수 출력
*/

const [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const prime = { 1: true };                      // 객체로 우선 1은 제외
for (let i = 2; i <= Math.sqrt(N); i++) {       
    if (prime[i]) continue;                     // 숫자가 이미 true이면 다음으로 넘어가기
    for (let j = i ** 2; j <= N; j += i) {      // 현재 숫자의 배수들(j += i)을 N이하 범위에서 제외 (=true값 부여)
        prime[j] = true;
    }
}
const results = [];

for (let i = M; i <= N; i++) {
    if (!prime[i]) results.push(i);             // true가 아닌 숫자들만 results배열에 담기
}   
console.log(results.join('\n'));            