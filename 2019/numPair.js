// 数对

let line = readline().split(' ')
let count = 0
let n = +line[0]
let k = +line[1]
if(k === 0) {
    count = n**2
} else {
    for(let i = k + 1;i<=n;i++) {
        count += ~~(n / i)*(i-k) + Math.max(0, n%i - k + 1)
    }
}
print(count)