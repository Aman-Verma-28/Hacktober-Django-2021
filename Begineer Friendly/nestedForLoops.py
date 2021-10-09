from itertools import product
a = list(map(int, input().split()))
b = list(map(int, input().split()))
ans=[]
for i in a:
    for j in b:
        ans.append((i,j))
print(*ans)