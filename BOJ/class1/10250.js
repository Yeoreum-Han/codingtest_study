/* ACM호텔 방배정하기
여러분이 작성할 프로그램은 초기에 모든 방이 비어있다고 가정하에 이 정책에 따라 N 번째로 도착한 손님에게 배정될 방 번호를 계산하는 프로그램이다. 첫 번째 손님은 101 호, 두 번째 손님은 201 호 등과 같이 배정한다. 그림 1 의 경우를 예로 들면, H = 6이므로 10 번째 손님은 402 호에 배정해야 한다.

프로그램은 표준 입력에서 입력 데이터를 받는다. 프로그램의 입력은 T 개의 테스트 데이터로 이루어져 있는데 T 는 입력의 맨 첫 줄에 주어진다. 각 테스트 데이터는 한 행으로서 H, W, N, 세 정수를 포함하고 있으며 각각 호텔의 층 수, 각 층의 방 수, 몇 번째 손님인지를 나타낸다(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W). 
 
2
6 12 10
30 50 72

402
1203
*/

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = Number(input.shift());

for (let i = 0; i < caseNum; i++) {
    let arr = input[i].split(' ');
    let H = Number(arr[0]);
    let N = Number(arr[2]);

    let room = Math.ceil(N/H).toString();
    let floor = Math.ceil(N%H).toString();
    if(floor == '0') floor = H;
    if(room < 10) room = '0'+room;
    console.log(floor+room);

}