// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

//  0 <= id <= 5000
function solution(node, idx) {
    if (idx < 0) {
        return node;
    }

    if (idx === 0) {
        return node.next;
    }
    let current_node = node;

    for (let i = 0; i < idx - 1; i++) {
        if (!current_node) {
            return
        }
        current_node = current_node.next;
    }

    if (current_node.next.next !== null) {
        current_node.next = current_node.next.next
    } else {
        current_node.next = null;
    }
    return node;
}

// function printLinkedList(head) {
//     while (head) {
//         console.log(head.value);
//         head = head.next;
//     }
// }
//
// function test() {
//     var node3 = new Node("node3");
//     var node2 = new Node("node2", node3);
//     var node1 = new Node("node1", node2);
//     var node0 = new Node("node0", node1);
//     var newHead = solution(node0, 2);
//     // result is node0 -> node2 -> node3
//     printLinkedList(newHead);
//
// }
//
// test();
