/*0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오. */

const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num-1);
};
console.log(factorial(n));

/* 
3! = 3*2*1 
재귀함수로 작성
*/