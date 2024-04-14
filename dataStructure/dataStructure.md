# 자료구조 : 데이터가 저장되는 방식 

## 자료타입  
1. 원시  
숫자 문자열 boolean null undefined  
**스택 메모리**에 저장되고, 변수에 값을 복사하여 할당  

2. 참조  
배열 객체 함수  
**힙 메모리**에 저장되고, 변수에 저장된 메모리의 주소를 할당  
  
   
||스택 메모리|힙 메모리|
|:---:|:---:|:---:|
|메모리 할당|컴파일 시(정적)|런타임 시(동적)|
|메모리 해제|함수 종료시|가비지 컬렉터가 관리|
|용도|로컬 변수/함수 호출|객체/배열 생성 및 사용|
|동작 방식|LIFO|필요에 따라 할당/해제|  


(정적)배열  
크기가 고정되어 있고 데이터가 연속적으로 저장된다.  
요소 삽입/삭제 시 배열을 복사해 새로운 배열을 생성/요소를 한칸씩 이동시킨다.  
    ㄴ크기가 클 수록 비효울적   
  
  
## 동적배열  
런타임에서 크기 변경 가능하고 필요에 따라 확장/축소한다.  

``` js
let cart = ["apple", "banana", "orange", "blueberry", "strawberry"];


// 빈 배열 초기화
let arr= [];  
let arr2 = new Array();

let arr3 = Array(5).fill(0);    // [0, 0, 0, 0, 0];

// 읽기 (상수시간)
console.log(cart[0]);
console.log(cart[1]);
console.log(cart[2]);
console.log(cart[8]);   // undefined

// 검색 (선형시간 : 순서대로 탐색, 탐색하는 시간만큼 걸림)
cart.indexOf("apple");      // 0
cart.indexOf("orange");     // 2

// 삽입 (선형시간)
cart.push("watermelon");    // 맨 뒤에    
cart.unshift("kiwi");       // 맨 앞에

// 삭제 (선형시간)
cart.pop();                 // 맨 뒤에
cart.shift();               // 맨 앞에
cart.splice(1,1);           // 인덱스 1번부터 1개의 요소 삭제 "banana"만 삭제됨

```


## 스택
LIFO인 선형 자료구조이고 ADT(추상자료형)이다.  
->데이터 구조의 논리적인 특성을 정의하지만 직접 구현은 추상화 하는 것.  
배열처럼 데이터를 list형태로 저장하고 스택의 마지막 요소만 읽을 수 있다.  
push() / pop() / peek()  


## 큐
FIFO인 선형 자료구조  
enqueue() / dequeue()