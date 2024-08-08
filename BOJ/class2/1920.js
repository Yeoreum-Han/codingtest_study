// 수 찾기  - 시간제한 이분탐색
// 이분탐색 = 정렬 -> while로 탐색(계속 중간값을 계산해서 이를 기준으로)
/* 
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

자연수 N                 5                  1
배열 A의 요소 N개        4 1 5 2 3          1
자연수 M                5                   0
M개의 수                1 3 7 9 5           0
                                            1
*/

const fs = require('fs');
const [N, A, M, S] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = A.split(' ').map(Number).sort((a, b) => a - b);      // 배열A요소 숫자로 변환 후 정렬
const searchArr = S.split(' ').map(Number);

const result = [];

searchArr.forEach(v => {
    let start = 0;
    let end = arr.length - 1;
    let res = false;
    while (start <= end) {       // 배열 요소 개수 동안 while문
        let mid = parseInt((start + end) / 2);      // 중간값 계산, 이를 기준으로 탐색

        if (v < arr[mid]) end = mid - 1;            // 요소가 arr의 중간번째 값보다 작으면 앞쪽 절반으로 범위 좁히기
        else if (v > arr[mid]) start = mid + 1;     // 요소가 arr의 중간번째 값보다 크면 뒤쪽 절반으로 범위 좁히기 
        else { 
            res = true;                             // 요소가 arr의 중간번째 값과 일치할 때 res = true;
            break; 
        }
    }

    if(res === true) result.push(1);                // res === true는 arr배열에 S배열 요소가 있다는 뜻이므로
    else result.push(0);                            // result 배열에 1 넣고, false 상태면 0 넣기
})

console.log(result.join('\n'));


