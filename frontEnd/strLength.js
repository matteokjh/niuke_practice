// 获取字符串长度
function strLength(s, bUnicode255For1) {
    return s.split('').reduce((acc,cur) => {
        if(!bUnicode255For1 && cur.charCodeAt() > 255) acc += 2
        else acc += 1
        return acc
    },0)
}