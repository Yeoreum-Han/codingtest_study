// 가위 바위 보     -   가위바위보 함수 작성
/*
첫째 줄에 라운드 수 R (1 ≤ R ≤ 50)이 주어진다.
둘째 줄에는 상근이가 각 라운드에 낸 모양이 주어진다. S는 가위, P는 보, R은 바위이다.
셋째 줄에는 친구의 수 N (1 ≤ N ≤ 50)이 주어진다.
다음 N개 줄에는 상근이의 친구들이 각 라운드에 낸 모양이 주어지며, 한 줄에 한 명씩 주어진다.

첫째 줄에 상근이의 점수를 출력한다.
둘째 줄에는 상근이가 얻을 수 있는 최대 점수를 출력한다.

5                   10
SSPPR               15
2
PPRRS
RRSSP
*/

const [R, sang, N, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function getScore(mine, friend) {   // 가위바위보 결과함수 
    if (mine == friend) {           // 비기면 1
        return 1;
    }

    switch (mine) {                 // 이기는 경우
        case 'R':
            return friend == 'S' ? 2 : 0;
        case 'P':
            return friend == 'R' ? 2 : 0;
        case 'S':
            return friend == 'P' ? 2 : 0;
        default:                    // 지는 경우
            return 0;
    }
}

let normalScore = 0;                // 순서대로 냈을 때 점수
let bestScore = 0;                    // 얻을 수 있는 최대 점수

for (let i = 0; i < R; i++) {             // 라운드 동안
    let r = 0;
    let s = 0;                           // r, s, p 낼때 각각의 최대점수
    let p = 0;

    for (let j = 0; j < N; j++) {
        let friend = arr[j][i];             // j번째 친구의 i라운드 값
        normalScore += getScore(sang[i], friend);
        r += getScore('R', friend);
        s += getScore('S', friend);
        p += getScore('P', friend);
    }
    bestScore += Math.max(Math.max(r, s), p);         // r, s, p 케이스 중 최대값
}

console.log(normalScore);
console.log(bestScore);



