// 牛牛找工作
let [jobCount, peopleCount] = readline().split(' ')
let hard = []
let money = {}
for(let i=0;i<jobCount;i++) {
    let [a,b] = readline().split(' ')
    hard.push(a)
    money[a] = money[a] ? Math.max(money[a], b) : b
}
hard.sort((a,b) => a-b)
let ability = readline()
while(ability === '') {
    ability = readline()
}
ability = ability.split(' ');

let res = []
for(let i=0;i<ability.length;i++) {
    print(findMax(+ability[i],hard))
}
// 二分查找
function findMax(val, arr) {
    let left = 0
    let right = arr.length
    while(left < right) {
        let mid = left + ~~((right - left) / 2)
        if(val === +arr[mid]) {
            return money[val]
        }
        if(val < +arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return money[arr[left]]
}
