// 颜色字符串替换
function rgb2hex(sRGB) {
    return sRGB.replace(/^rgb\((\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)\s*\)$/g, function(a,r,g,b) {
        return '#' + hex(r) + hex(g) + hex(b)
    })
}

function hex(a) {
    return ('0' + (+a).toString(16)).slice(-2)
}