function solution(node) {
    let current_node = node;
    while (current_node) {
        console.log(current_node.value);
        current_node = current_node.next;
    }
}
