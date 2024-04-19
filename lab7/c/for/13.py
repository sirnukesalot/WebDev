N = int(input())

zero_count = 0

for i in range(N):
    num = int(input())
    if num == 0:
        zero_count += 1

print(zero_count)
