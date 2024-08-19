// 듣보잡 - Set()으로 교집합 구하기
/*
김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.
듣보잡의 수와 그 명단을 사전순으로 출력한다.

3 4                 2
ohhenrie            baesangwook
charlie             ohhenrie
baesangwook
obama
baesangwook
ohhenrie
clinton */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = inputs.shift().split(' ').map(Number);
const nSet = new Set(inputs.slice(0, N));               // N-1까지 요소를 담은 Set() 생성
const result = inputs.slice(N).filter(name => nSet.has(name)).sort();
// N부터 끝까지 요소의 배열에서 filter로 nSet에 이 배열의 요소가 있는지 확인(.has()) 후 sort()

console.log(result.length);
console.log(result.join('\n'));

