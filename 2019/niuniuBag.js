// 牛牛的背包问题
let res = 0
let [total, bag] = readline().split(/\s+/)
let arr = readline().split(/\s+/)
if(arr.reduce((acc,cur)=>(acc+ +cur),0) <= bag) print(2**total)
else {
    function dfs(i,t) {
        if(i >= total) {
            res++
            return
        } else if(t > bag) {
            return
        }
        if(t+ +arr[i] <= bag) {
            dfs(i+1,t+ +arr[i])
        }
        dfs(i+1,t)
    }

    dfs(0,0)
    print(res)
}