// 포켓몬마스터 - map으로 번호와 포켓몬이름 맵핑 set,get
/*
26 5        
Bulbasaur               Pikachu
Ivysaur                 26
Venusaur                Venusaur
Charmander              16
Charmeleon              14
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna
 */

const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');  
let [n, m] = input.shift().split(' ');      // 포켓몬수 n 문제갯수 m

let map = new Map();
let answer = [];

for (let i = 0; i < n; i++) {           // map에 포켓몬 수만큼
    map.set(i + 1 + '', input[i]);      // set으로 (번호, 이름) 넣기
    map.set(input[i], i + 1 + '');      // set으로 (이름, 번호) 넣기
}                                       // 문제가 번호 또는 이름으로 나오기 때문에 두 쌍 다 넣음

for (let j = n; j < input.length; j++) {    // 문제는 n번째 줄 이후부터 시작 ~ input길이 끝까지
    answer.push(map.get(input[j]));         // get으로 map에서 (문제)에 해당하는 값 가져오고 
}                                           // 정답배열에 push

console.log(answer.join('\n')); 