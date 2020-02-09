// 被3整除

let line = readline().split(' ')
let start = +line[0]
let end = +line[1]
let res = end - start + 1 - ~~((end+2)/3) + ~~((start+1)/3)
print(res)
