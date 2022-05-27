n = int(input())
array1 = list(input().split(' '))
array2 = list(input().split(' '))

result_array = []

for i in range(n):
    result_array.append(array1[i])
    result_array.append(array2[i])
print(' '.join(result_array))

