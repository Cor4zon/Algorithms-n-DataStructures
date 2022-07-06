class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if (self.isEmpty()):
            print('error')
            return
        return self.stack.pop()

    def size(self):
        return len(self.stack)

    def isEmpty(self):
        if (self.size() == 0):
            return True
        return False

    def get_max(self):
        if self.isEmpty():
            return 'None'

        return max(self.stack)

    def print_stack(self):
        print(f'{" -> ".join(self.stack)}')



stack = Stack()
n = int(input())

while (n):
    input_str =  input()
    input_str = input_str.split()

    if (input_str[0] == 'push'):
        stack.push(input_str[1])
    elif (input_str[0] == 'pop'):
        stack.pop()
    elif (input_str[0] == 'get_max'):
        print(stack.get_max())
    elif (input_str[0] == 'print_stack'):
        stack.print_stack()
    n -= 1

