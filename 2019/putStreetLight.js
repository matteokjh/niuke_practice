// 安置路灯

let c = readline()

for(let i=0;i<c;i++) {
    let total = readline()
    let str = readline()
    print(getRes(str, total))
}

function getRes(str, total) {
    let count = 0
    for(let i=0;i<total;i++) {
        if(str[i] === '.') {
            i+=2
            count++
        }
    }
    return count
}