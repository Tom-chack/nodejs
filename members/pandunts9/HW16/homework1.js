console.log(__filename)
let l = __filename
let count = 1
for(let i = 0; i < l.length;i++){
    if( l[i] == "\\" ){
        count++
    }
}
console.log(count)