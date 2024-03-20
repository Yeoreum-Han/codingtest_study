/*빠른입력 A+B */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = parseInt(input[0]);
let result = '';

for(i=1;i<=t; i++){
    let nums = input[i].split(' ');
    result += (parseInt(nums[0])+parseInt(nums[1]))+'\n';
}
console.log(result);