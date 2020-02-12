// 牛牛的闹钟
let total = readline()
let arr = []
for(let i=0;i<total;i++) {
    arr.push(readline().split(/\s+/))
}
let plus = +readline()
let ddl = readline().split(/\s+/)
ddl = ddl[0]*60 + +ddl[1]
let max = 0
let res = ''
for(let time of arr) {
    let s = time[0] * 60 + +time[1]
    s += +plus
    if(s > ddl) continue
    if(s > max) {
        res = time.join(' ')
        max = s
    }
}
console.log(res)