N = int(input())

is_power_of_two = False
while N > 1:
    if N % 2 != 0:
        break  
    N //= 2 
else:
    is_power_of_two = True

if is_power_of_two:
    print("YES")
else:
    print("NO")
