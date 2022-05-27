
def twosum_with_sort(numbers, X):
    numbers.sort()
    left = 0
    right = len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == X:
            return left, right
        if current_sum < X:
            left += 1
        elif current_sum > X:
            right -= 1


print(twosum_with_sort([2, 3, 3, 7, 8, 9, 11, 15], 16))
