n = int(input())
array = list(map(int, input().split()))
k = int(input())

prev_element = 0
result = []
current_sum = 0
next_element = 0

for i in range(k):
    current_sum += array[i]

for i in range(n-k):
    current_sum -= prev_element
    current_sum += next_element

    prev_element = array[i]
    next_element = array[i+k]
    result.append(str(current_sum / k))

current_sum -= prev_element
current_sum += next_element
result.append(str(current_sum / k))

print(' '.join(result))

