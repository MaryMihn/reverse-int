module.exports = function reverse (n) {
  if(n<0){
      let r = String(n*(-1)).split('').reverse().join('');
      return +r
  }
  else{
    let r = String(n).split('').reverse()
    if (r[0]===0){
         r.splice(0, 1)
         let s= r.join('')
         return +s
    }
    else{
        let z = r.join('')
        return +z
    }
  }
}
