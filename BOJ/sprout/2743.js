/*단어길이재기
알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오. */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.length);