/*시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오. */

const input = require('fs').readFileSync('/dev/stdin').toString();
if(parseInt(input)<60){
    console.log('F');
} else if(parseInt(input)<70){
    console.log('D');
} else if(parseInt(input)<80){
    console.log('C');
} else if(parseInt(input)<90){
    console.log('B');
} else {
    console.log('A');
}