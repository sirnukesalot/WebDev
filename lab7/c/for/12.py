binary_num = input()

decimal_num = 0

for i in range(len(binary_num)):
    digit = int(binary_num[len(binary_num) - i - 1])
    decimal_num += digit * (2 ** i)

print(decimal_num)
