function sumArray(array) {
    if(!Array.isArray(array)){
      return 0
    }else{
      let max = array.indexOf(Math.max(...array))
      array.splice(max, 1)
      let min = array.indexOf(Math.min(...array))
      array.splice(min, 1)
      
      return array.reduce( (sum, c) => sum += c, 0)
    }
}