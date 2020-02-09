// 迷路的牛牛

let step = readline()
let str = readline()
let res = 0
for(let i=0;i<step;i++) {
    if(str[i] === 'L') res--
    else res++
}
res %= 4
res = res < 0 ? 4 + res : res
switch(res) {
    case 0: console.log('N');break
    case 1: console.log('E');break
    case 2: console.log('S');break
    case 3: console.log('W')
}