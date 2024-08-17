// 균형잡힌 소떡소떡 - slice(j).join('') 개별문자수 카운트 후 다시 for문으로 숫자 맞춰나가기
/*
첫째 줄에 소떡소떡의 길이가 주어진다.
둘째 줄에 소떡소떡을 의미하는 길이 
N의 문자열이 주어진다. 이 문자열은 알파벳 s와 t로만 구성되어 있다.
위 과정을 통해 균형 잡힌 소떡소떡으로 만들 수 없는 입력은 주어지지 않는다. 

7
sttstts             stts

4
ttts                ts

*/
const fs = require('fs');
const [N, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sCount = 0;
let tCount = 0;
const str = input.split('');

for (let i = 0; i < str.length; i++) {
    if (str[i] === 's') sCount++;
    else tCount++;
}

for (let j = 0; j < str.length; j++) {
    if (sCount === tCount) {
        console.log(str.slice(j).join(''));
        break;
    } else if (str[j] === 's') {
        sCount--;
    } else if (str[j] === 't') {
        tCount--;
    }
}