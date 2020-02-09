// 根据包名，在指定空间中创建对象

function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.')
    let res = oNamespace
    for(let key of arr) {
        if(key in oNamespace) {
            if(typeof oNamespace[key] !== 'object') {
                oNamespace[key] = {}
            }
        } else {
            oNamespace[key] = {}
        }
        oNamespace = oNamespace[key]
    }
    return res
}