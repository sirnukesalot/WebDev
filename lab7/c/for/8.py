import math

x = int(input())

divisors_count = 0

for i in range(1, int(math.sqrt(x)) + 1):
    if x % i == 0:
        if i != x // i:
            divisors_count += 2
        else:
            divisors_count += 1


print(divisors_count)
