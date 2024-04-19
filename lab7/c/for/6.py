x = int(input())

x_str = str(x)

reversed_x_str = ''

for i in range(len(x_str) - 1, -1, -1):
    reversed_x_str += x_str[i]

reversed_x = int(reversed_x_str)

print(reversed_x)
