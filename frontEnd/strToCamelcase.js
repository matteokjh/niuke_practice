// css - 转驼峰

function cssStyle2DomStyle(sName) {
    let str = sName.split('-').map((e,idx)=>{
        return e ? e[0].toUpperCase() + e.substring(1) : e
    }).join('')
    return str[0].toLowerCase() + str.substring(1)
}