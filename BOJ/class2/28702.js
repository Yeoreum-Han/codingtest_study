//FizzBuzz
/*
FizzBuzz 문제는 i = 1, 2, ...에 대해 다음 규칙에 따라 문자열을 한 줄에 하나씩 출력하는 문제입니다.
 
i가 3의 배수이면서 5의 배수이면 “FizzBuzz”를 출력합니다. 
i가 3의 배수이지만 5의 배수가 아니면 “Fizz”를 출력합니다.
i가 3의 배수가 아니지만 5의 배수이면 “Buzz”를 출력합니다.
i가 3의 배수도 아니고 5의 배수도 아닌 경우 i를 그대로 출력합니다.

FizzBuzz 문제에서 연속으로 출력된 세 개의 문자열이 주어집니다. 이때, 이 세 문자열 다음에 올 문자열은 무엇일까요?

Fizz        Fizz
Buzz
11

980803      980806
980804
FizzBuzz
*/

//입력값 중 숫자찾기 -> 몇번째 인덱스인지 확인 -> 0번째면 +3 1번째 +2 2번째 +1 -> F/B/FB/i 조건확인 
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = 0;
let numIdx = 0;
for (let i = 0; i < input.length; i++) {                                         // 숫자 찾기
    if (input[i] !== 'Fizz' && input[i] !== 'Buzz' && input[i] !== 'FizzBuzz') {
        numIdx = i;                                                             // 인덱스값 확인
        result = parseInt(input[i]);
    }
}

if (numIdx === 0) result += 3;             // 정답숫자 계산
else if (numIdx === 1) result += 2;
else if (numIdx === 2) result += 1;

if (result % 3 === 0 && result % 5 === 0) console.log('FizzBuzz');    // FizzBuzz 조건 확인후 출력
else if (result % 3 === 0 && result % 5 !== 0) console.log('Fizz');
else if (result % 3 !== 0 && result % 5 === 0) console.log('Buzz');
else console.log(result);

