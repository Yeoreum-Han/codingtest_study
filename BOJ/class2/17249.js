// 태보태보 총난타
/*
얼굴의 왼편에 왼손의 잔상이, 오른편에는 오른손이 잔상이 남을 때 혜정이는 주먹을 몇 번 뻗었을까?
주먹의 잔상은 =로 시작하여 @로 끝나고, 잔상이 남지 않는 경우는 없다. 얼굴 형태가 (^0^) 꼴이고, 주먹의 잔상이 같은 곳에 위치하지 않는다.

@===@==@=@==(^0^)==@=@===@      4 3
 */

const [left, ...right] = require('fs').readFileSync('/dev/stdin').toString().trim().split('0');
// 얼굴의 0 을 기준으로 왼/오 나누기
let lCount = 0;
let rCount = 0;
left.split('').filter((v) => {   
    if (v === '@') lCount++;
});
right.split('').filter((v) => {
    if (v === '@') rCount++;
});

console.log(`${lCount} ${rCount}`);