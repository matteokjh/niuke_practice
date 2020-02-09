function getUrlParam(sUrl, sKey) {
    if(sUrl.indexOf('?') >= 0) {
        let str = sUrl.split('?')[1]
        str = str.split('#')[0]
        let params = str.split('&')
        let obj = {}
        params = params.map(e=>{
            let [key, val] = e.split('=')
            if(obj[key] !== undefined) {
                if(!Array.isArray(obj[key])){
                    let arr = [obj[key], val]
                    obj[key] = arr
                } else {
                    obj[key].push(val)
                }
            } else {
                obj[key] = val
            }
        })
        if(sKey) {
            return obj[sKey] || ''
        } else {
            return obj
        }
    } else {
        if(sKey) {
            return ''
        } else {
            return {}
        }
    }
}

let str = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
let key = 'key123'

let res = getUrlParam(str, key)

console.log(res)