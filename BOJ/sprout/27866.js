/* 문자와 문자열 
단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S가 주어진다. 단어의 길이는 최대 1000이다.
둘째 줄에 정수 i가 주어진다.*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let s = input[0];
let i = Number(input[1]);

console.log(s[i-1]);    //idx는 0부터 시작하니까