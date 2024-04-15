/*체스판 다시 칠하기 */
let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [size, ...arr] = input;
let [row, col] = size.split(" ");
arr = arr.map((i) => i.split(""));
const answer = [];

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== whiteFirstBoard[i][j]) count++;
    }
  }
  return count;
}

function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== blackFirstBoard[i][j]) count++;
    }
  }
  return count;
}

for (let j = 0; j < row - 7; j++) {
  for (let k = 0; k < col - 7; k++) {
    answer.push(whiteFirst(j, k));
    answer.push(blackFirst(j, k));
  }
}

console.log(Math.min(...answer));
/*
 체스판을 칠하는 경우는 두가지뿐 - 흰/검 시작
 정답 배열을 만들어 두고 입력배열과 비교해서 count가 더 적은 값 출력
 (0,0)부터 
 */