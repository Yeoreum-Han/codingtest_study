// 부녀회장이 될테야
/*“a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 
첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
k층에 n호에는 몇 명이 살고 있는지 출력하라
1 ≤ k, n ≤ 14

2               6
1               10
3
2
3
*/

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => parseInt(x))
const T = input.shift();

for (let i = 0; i < T; i++) {   // 테스트케이스 수만큼 계산 반복
    const k = input.shift();
    const n = input.shift();

    //층과 호를 사용하므로 2차원 배열생성. [0]층[1]호 = 1명  Array.from(배열길이, 콜백함수)
    const apt = Array.from(Array(k + 1), () => Array(n + 1).fill(0)); //0층부터 시작 => k+1  배열순서맞추기 => n+1

    for (let i = 1; i <= n; i++) {   // 0층값 설정
        apt[0][i] = i
    }

    for(let i=1; i<=k; i++){
        for(let j=1; j<=n; j++){
            apt[i][j] = apt[i-1][j] + apt[i][j-1]       // 1층 3호 = 0층 3호 + 1층 2호
        }
    }

    console.log(apt[k][n]);
}


