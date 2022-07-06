# Comment it before submitting
class Node:
    def __init__(self, value, next_item=None):
        self.value = value
        self.next_item = next_item

def solution(node) -> None:
    current_node = node
    while (current_node):
        print(current_node.value)
        current_node = current_node.next_item
