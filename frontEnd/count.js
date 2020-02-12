// 字符串字符统计
function count(str) {
    let m = {}
    for(let i=0;i<str.length;i++) {
        if(str[i] === ' ') continue
        if(!m[str[i]]) m[str[i]] = 0
        m[str[i]]++
    }
    return m
}