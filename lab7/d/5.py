N = int(input())

arr = list(map(int, input().split()))

has_same_sign_pair = False

for i in range(N - 1):  
    if arr[i] * arr[i + 1] > 0:  
        has_same_sign_pair = True
        break  


if has_same_sign_pair:
    print("YES")
else:
    print("NO")
