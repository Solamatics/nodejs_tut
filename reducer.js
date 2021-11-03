const sqaureList = arr => {
    return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2))
}

console.log(sqaureList([4, 6, "k", -8]))