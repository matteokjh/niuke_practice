// 邮箱正则
function isAvailableEmail(sEmail) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    return reg.test(sEmail)
}