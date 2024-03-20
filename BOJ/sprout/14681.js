/*점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 
단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다. */

const input = require('fs').readFileSync(0).toString().trim().split('\n');
const x = parseInt(input[0]);
const y = parseInt(input[1]);

if(x>0 && y>0) console.log('1');
else if(x>0 && y<0) console.log('4');
else if(x<0 && y>0) console.log('2');
else console.log('3');


/* 
.trim()   -> 문자열 뒤에 있는 공백을 제거   
  줄바꿈으로 나누어 입력된 값들은 마지막에 공백도 입력값에 포함되기 때문에...
제거하지 않으면 런타임에러(EACCES) 발생  permission denied

그래도 에러발생
readFileSync(0)으로 수정해서 성공  ->  보통은 path를 /dev/stdin로 설정했는데 이 문제는 해당 경로에 파일이 없거나 권한 설정문제가 있음 그래서 '표준입력값'인 0으로 해결


또 다른 해결방법
readline으로 입력받기.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);

    if(x>0 && y>0) console.log('1');
    else if(x>0 && y<0) console.log('4');
    else if(x<0 && y>0) console.log('2');
    else console.log('3');
    
    process.exit();
});

*/

