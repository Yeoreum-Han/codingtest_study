// 동전 0
/*
준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

10 4200              6
1
5
10
50
100
500
1000
5000
10000
50000
 */
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = inputs.shift().split(' ').map(Number);
const coins = inputs.sort((a, b) => b - a);
let count = 0;
let money = K;

for (const coin of coins) {
    if (coin <= money) {
        count += Math.floor(money / coin);
        money %= coin;
    }
}
console.log(count);