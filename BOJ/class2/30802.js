// 미완, 개열받음
// 웰컴 키트
//23                총 인원수
//3 1 4 1 5 9       사이즈별 신청수
//5 7               티 한묶음의 개수, 펜 한묶음의 개수

//7         티셔츠 최소 몇 묶음 주문
//3 2       펜 최대 몇 묶음, 낱개로 몇 개

const fs = require('fs');
const [[total], tOrder, [tNum, pNum]] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>x.split(' ').map((x)=>parseInt(x)));

const shirtBundleCount = tOrder.reduce((prev, cur) => prev + Math.ceil(cur / tNum), 0); // 3/7일 경우에도 최소 한묶음 주문해야 하므로 ceil
//사이즈 별 티셔츠주문수량(cur/tNum) 덧셈 한줄코드로.
const penBundleCount = Math.floor(total / pNum);
const penSingleCount = total % pNum;

console.log(`${shirtBundleCount}\n${penBundleCount} ${penSingleCount}`);

