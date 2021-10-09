if __name__ == '__main__':

    l = []
    second_lowest_names = []
    scores = set()
    n = int(input())

    for _ in range(n):
        name = input()
        score = float(input())
        l.append([name, score])
        scores.add(score)

    second_lowest_score = sorted(scores)[1]

    for name, score in l:
        if score == second_lowest_score:
            second_lowest_names.append(name)

    ans = sorted(second_lowest_names)
    for i in ans:
        print(i)








