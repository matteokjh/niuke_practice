

function formatDate(t, s) {
    t = eval(t)
    let year = t.getFullYear()
    let month = t.getMonth() + 1
    let date = t.getDate()
    let day = t.getDay()
    let hour = t.getHours()
    let minute = t.getMinutes()
    let second = t.getSeconds()
    let obj = {
        yyyy: year,
        yy: ('' + year).slice(-2),
        MM: ('0' + month).slice(-2),
        M: month,
        dd: ('0' + date).slice(-2),
        d: date,
        HH: ('0' + hour).slice(-2),
        H: hour,
        hh: ('0' + hour % 12).slice(-2),
        h: hour % 12,
        mm: ('0' + minute).slice(-2),
        m: minute,
        ss: ('0' + second).slice(-2),
        s: second,
        w: ['日','一','二','三','四','五','六','日'][day]
    }
    return s.replace(/[a-z]+/ig,function($1) {
        return obj[$1]
    })
}

let str = 'new Date(1409894060000)'
let option = 'yyyy-MM-dd HH:mm:ss 星期w'

let res = formatDate(str, option)
console.log(res)