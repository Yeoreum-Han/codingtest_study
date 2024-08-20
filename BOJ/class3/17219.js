// 비밀번호찾기 - map으로 맵핑, 1620참고
/*
첫째 줄에 저장된 사이트 주소의 수 N(1 ≤ N ≤ 100,000)과 비밀번호를 찾으려는 사이트 주소의 수 M(1 ≤ M ≤ 100,000)이 주어진다.
두번째 줄부터 N개의 줄에 걸쳐 각 줄에 사이트 주소와 비밀번호가 공백으로 구분되어 주어진다. 사이트 주소는 알파벳 소문자, 알파벳 대문자, 대시('-'), 마침표('.')로 이루어져 있고, 중복되지 않는다. 비밀번호는 알파벳 대문자로만 이루어져 있다. 모두 길이는 최대 20자이다.
N+2번째 줄부터 M개의 줄에 걸쳐 비밀번호를 찾으려는 사이트 주소가 한줄에 하나씩 입력된다. 이때, 반드시 이미 저장된 사이트 주소가 입력된다. 

16 4                            THEKINGOD
noj.am IU                       UAENA
acmicpc.net UAENA               IU
startlink.io THEKINGOD          ADREAMER
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr*/

const [nums, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = nums.split(' ').map(Number);
const memoArr = arr.slice(0, N).map((v)=>v.split(' '));             // [[noj.am, IU] ...]
const questions = arr.slice(N);

let memos = new Map();
for (let i = 0; i < N; i++) {
    memos.set(memoArr[i][0], memoArr[i][1]);
}  
let result = [];
for(const ques of questions){
    result.push(memos.get(ques));
}
console.log(result.join('\n'));