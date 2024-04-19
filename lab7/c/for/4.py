a=int(input())
b=int(input())
count = 0
a_str=str(a)
for i in a_str:
    if int(i) == b:
        count+=1
print(count)