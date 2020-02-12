// 俄罗斯方块
let [col, total] = readline().split(/\s+/)
let arr = readline().split(/\s+/)
let res = 0
let m = {}
let cnt = 0
for(let i of arr) {
    if(!m[i]){
         m[i] = 0
         cnt++
    }
    m[i]++
}
if(cnt < col) print(0)
else {
    let min = 1001
    Object.keys(m).forEach(e=>{
        min = Math.min(min,m[e])
    })
    res = min
    print(res)
}
