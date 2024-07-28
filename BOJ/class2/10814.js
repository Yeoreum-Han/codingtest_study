// 나이순 정렬
// sort로 나이순 정렬. 가입순으로 주어졌기 때문에 별도 처리없이 같은 나이는 가입한 순서대로 정렬됨. 
/*
온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오. 

3
21 Junkyu           20 Sunyoung 
21 Dohyun           21 Junkyu
20 Sunyoung         21 Dohyun
*/

const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.sort((a, b) => a.split(' ')[0] - b.split(' '[0]));
console.log(input.join('\n'));

// parseInt로 입력값 중 나이만 남겨 비교하는 방법 (가장 빠른 시간)
input.sort((a, b) => parseInt(a) - parseInt(b));
console.log(input.join('\n'));

// 객체배열을 생성해 age키로 비교하는 방법 (가장 큰 메모리)
input.map((x) => ({ age: parseInt(x.split(' ')[0]), name: x.split(' ')[1] }))
    .sort((a, b) => a.age - b.age)
    .map((x) => `${x.age} ${x.name}`);
console.log(input.join('\n'));