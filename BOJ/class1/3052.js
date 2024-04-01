/* 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다. 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

1
2
3
4
5
6
7
8
9
10

10
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>x%42);
const setArr = [...new Set(input)];
console.log(setArr.length);

/* x%42한 배열에서 중복요소를 제거하는게 문제 - set객체 사용
new Set(arr) -> 새로운 배열로 반환*/