/* 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오. 
서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.*/

const today = new Date().toISOString().split('T');
console.log(today[0]);


/* 
toISOString() -> 2024-03-17T13:49:43.697Z 
split('T') -> string T를 기준으로 분리해서  ['2024-03-17','13:49:43.697Z']
today[0] -> 첫번째 문자열만 출력
*/

/* split() : 결과를 배열로 반환 */