var Timeout;
var num = 0

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onClick(){
  var lowNr = document.getElementById('input1').value
  var highNr = document.getElementById('input2').value
  var txtNr = document.getElementById('Random_Dice')


    Timeout = setInterval(() => {
      num++
      if(num > 9){
        num = 0
      }
      txtNr.innerHTML = num
      }, 20);
  

    setTimeout(() => {
      test = ()=>{}
      clearTimeout(Timeout)
      txtNr.innerHTML = getRandomInt(lowNr,highNr)
    }, 1000);
}

/*

if(document.getElementById("button").onClick === true){
function reset(){
  setTimeout(() => {
  console.log('tru')
  }, 200);
}
}else{
  function reset(){
    setTimeout(() => {
    console.log(' not tru')
    }, 200);
  }
} 
*/