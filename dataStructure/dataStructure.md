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


## 연결리스트(Linked List)  
random access 불가능 
리스트의 n번째 노드 방문지 O(n)시간 소요  
-> head노드에서 시작해 n번째 노드까지 가야하므로  
노드 삽입 & 삭제 -> 배열(O(n))보다 빠를 수 있다.   

### 단일 연결 리스트 (Single Linked List)
Node (값 + 포인터(next)) / head 노드에서 시작 tail 노드에서 끝 / tail 노드의 next포인터는 null값  

### 이중 연결 리스트 (Doubly Linked List)  
Node (값 + 포인터(next, **prev**)) / head 노드에서 시작 tail 노드에서 끝 / tail 노드의 next포인터는 null값 / prev포인터의 값은 이전 Node의 원소값  

### 원형 연결 리스트 (Circular Linked List)
Node (값 + 포인터(next)) / head 노드에서 시작 tail 노드에서 끝 / tail 노드의 next포인터는 head 노드의 원소값  

### 구현
```js
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node('a');           // a
head.next = new Node('b');          // a -> b
head.next.next = new Node('c');     // a -> b -> c
head.next.next = new Node('d');     // a -> b -> c -> d

```
