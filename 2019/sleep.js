// 瞌睡
let [total, cnt] = readline().split(/\s+/)
let score = readline().split(/\s+/)
let arr = readline().split(/\s+/)
score = score.map(e=> +e)
total = +total
cnt = +cnt
let res = 0
let base = 0
let max = 0

for(let i=0;i<arr.length;i++) {
    score[i] = +score[i]
    arr[i] = +arr[i]
    if(arr[i] === 1) {
        base += score[i]
    }
}
let tmp = 0
// 前3个
for(let i=0;i<cnt;i++) {
    if(arr[i] === 0) tmp += score[i]
}
max = Math.max(max, tmp)
// 遍历
for(let i=1;i<=total-cnt;i++) {
    if(arr[i+cnt-1] === 0) tmp += score[i+cnt-1]
    if(arr[i-1] === 0) tmp -= score[i-1]
    max = Math.max(max, tmp)
}
res = base + max
print(res)