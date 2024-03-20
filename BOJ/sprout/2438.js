/*첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 
*
**
***
****
*****
*/

const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = '';

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        result += '*';
    }
    result += '\n';
};

console.log(result);

/* 
str.repeat(n)  n번만큼 str을 반복하는 함수 

for(i=1; i<=n; i++){
    result = '*'.repeat(i);
  	console.log(result);
}
*/