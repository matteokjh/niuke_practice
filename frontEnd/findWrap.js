// 矩形重叠

let n = readline()
let lines = []
for(let i=0;i<4;i++) {
    lines.push(readline().split(/\s+/))
}
let x1 = test(lines[0])
let y1 = test(lines[1])
let x2 = test(lines[2])
let y2 = test(lines[3])

let res = 1
let A = [...x1,...x2]
let B = [...y1,...y2]
for(let x of A) {
    for(let y of B) {
        let count = 0
        for(let i=0;i<n;i++) {
            if(x > x1[i] && y > y1[i] && x <= x2[i] && y <= y2[i]) {
                count++
            }
        }
        if(res < count){
            res = count
        }
    }
}
function test(arr){
    return arr.map(e=> +e)
}
print(res)