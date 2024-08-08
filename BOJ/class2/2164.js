// 카드2    - 시간초과  이중연결리스트
/*
N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오. 

예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

6   4
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input.shift());

class Node {                     // Node 정의
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {              // 연결리스트 정의
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {                                  // 노드 추가 메서드
        const newNode = new Node(value);

        if (!this.head)                           // 기존 노드가 없다면 생성된노드가 head
            this.head = newNode;
        else {
            this.tail.next = newNode              // 기존 노드가 있으면 기존 tail의 next를 생성된노드로 연결
            newNode.prev = this.tail              // 생성된 노드의 prev를 기존 tail로 연결
        }

        this.tail = newNode                       // 이제 tail은 생성된 노드
        this.length++;

        return newNode;
    }

    getHead() {                                   // 현재 head의 값 가져오는 메서드
        return this.head.value;
    }

    removeHead() {                               // 현재 head 제거하는 메서드
        this.head = this.head.next;              // 현재 head의 next값이 head가 됨
        this.head.prev = null;
        this.length--;
    }
    getSize() {                                  // 현재 리스트의 크기 가져오는 메서드
        return this.length;
    }
}



const node = new LinkedList();                  // 연결리스트 생성

for (let i = 1; i <= n; i++) {                  // 리스트에 n만큼 노드 추가
    node.add(i);
}
while (node.getSize() !== 1) {                  // 리스트 크기가 1이 아닌 동안 반복 (하나만 남을때 까지)
    node.removeHead();                          // 맨 위 제거하고
    node.add(node.getHead());                   // 맨 뒤에 현재의 head값 추가 (같은 값임)
    node.removeHead();                          // 이제 head 삭제
}

console.log(node.getHead());                    // 마지막 남은 하나의 값 출력
