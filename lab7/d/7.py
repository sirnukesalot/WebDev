a= int(input())

arr=[int(i) for i in input().split()]
end = len(arr) - 1
for i in range(a):
    arr.insert(i, arr.pop(end))
print(arr)