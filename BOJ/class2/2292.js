// 벌집  6의배수로 주변 방이 늘어남, 6*1 6*2 6*3 ...
// e.g) 13번방은 2*6 보다 크니까 2+1개 방을 지남
// 58번방은 9*6 보다 크니까 9+1개 방을 지남
const fs = require('fs');  
const input = fs.readFileSync('/dev/stdin').toString().trim();  
let room = 1;
let count = 1;
while(true){
    if(input <= room){
        break;
    }
    room += count * 6;
    count++;
}
console.log(count);
