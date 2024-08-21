// 피보나치 함수
/*
 N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오. 

 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.
각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.

3
0
1
3

1 0
0 1
1 2
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

for (let i = 0; i < len; i++) {
    const n = input[i];

    const fibonacci = [[1, 0], [0, 1]];     // 초기값 [[정수가 0일때 0의 개수, 1의 개수], [정수가 1일때 0의 개수, 1의 개수]]
    
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0], 
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}