/*자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.*/

const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = '';
for(i=1; i<=n; i++){
    result += i +'\n';
}
console.log(result);

/*변수에 담은 다음 한번에 출력하는게 시간절약*/