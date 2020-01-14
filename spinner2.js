let play = ['|','/','-','\\','|','/','-','\\','|']
function spin(array){
  let delay = 0;
  for(let i = 0; i < array.length; i++){
    setTimeout (() =>{
      process.stdout.write('\r' + array[i])
    }, delay += 200)
  }
}
spin(play)