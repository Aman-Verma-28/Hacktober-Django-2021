
def print_rangoli(size):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    subset = alpha[:size]
    base = "-".join(reversed(subset))
    rows = []
    for i in range(size):
        row = base[:len(base) - i*2]
        row = ("-" * (len(base) - len(row))) + row
        rows.insert(0, row)
    rows.extend(reversed(rows[:-1]))
    for i in range(len(rows)):
        row = rows[i]
        rev_row = row[::-1]
        rows[i] = row + rev_row[1:]
    print(*rows, sep="\n")
