/*대소문자 바꾸기
영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤, 대문자는 소문자로, 소문자는 대문자로 바꾸어 출력하는 프로그램을 작성하시오.*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = '';

for(i=0; i<input.length; i++) {
    if(input[i] === input[i].toUpperCase()){    //대문자면
        result += input[i].toLowerCase();       //소문자로 바꿔서 넣고
    }else {
        result += input[i].toUpperCase();       //대문자가 아니면 대문자로 바꿔서 넣음
    }
}

console.log(result);