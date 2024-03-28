/*알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다. 
Mississipi
?*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.toUpperCase();
let obj = {};   //객체 리터럴로 선언
for(let i=0; i<arr.length; i++){        //알파벳 arr[i]를 key에 넣으면서 첫 알파벳이면 1, 아니면 횟수세기
    if(obj[arr[i]] === undefined) obj[arr[i]]=1;
    else obj[arr[i]] += 1;
}
let result = '';
let count = 0;
for (char in obj){          //key 값을 하나씩 순회하며 최대 count 찾기, 최대 카운트일때 result에 key저장, count가 같은 값이 있으면 else조건이니까 ? 저장
    if(obj[char] > count){
        count = obj[char];
        result = char;
    } else if(obj[char]===count) {
        result = '?';
    }
}
console.log(result);


/* 문자열을 객체에 넣어서 key:알파벳 value:횟수로 풀기
대문자로 통일
객체를 리터럴로 선언, obj[key] = value;
*/
