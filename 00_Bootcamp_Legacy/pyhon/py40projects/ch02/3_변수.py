a = 10
b = 10
c = a + b
print(c)

# 서로 다른 자료형끼리 연산 불가
d = '10'
# print(c + d)

# 문자열을 숫자로 변형하면 연산 가능
print(c + int(d))

# 숫자를 문자열로 변형하면 연산 가능
print(str(c) + d)

# 같은 숫자형일 때는 자동으로 소수점형으로 계산
e = 3.14
f = 10
print(e + f)

# 소수점형으로 변환
g = 10
h = 10
i = float(g) + float(h)
print(i)

