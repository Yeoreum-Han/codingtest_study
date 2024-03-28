const N = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = '';
let blank = '';
for(i=1; i<=N; i++){
    result += '*';
    for(j=0; j<N-i; j++){
        blank += ' ';
    }
    console.log(blank+result);
    blank = '';
}

//for(i=1; i<=N; i++) console.log(' '.repeat(N-i)+'*'.repeat(i));