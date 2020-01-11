

////////////   On Click Random Number   ////////////
var Timeout;
var num = 0

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onClick(){
if(lowNr != '' && highNr != ''){
  var lowNr = document.getElementById('input1').value
  var highNr = document.getElementById('input2').value
  var txtNr = document.getElementById('Random_Dice')
  
  document.getElementById('button').disabled = true;
  Timeout = setInterval(() => {
    num++
    if(num > 9){
      num = 0
    }
    txtNr.innerHTML = num
    }, 20);
    

  setTimeout(() => {
    document.getElementById('button').disabled = false;
    test = ()=>{}
    clearTimeout(Timeout)
    txtNr.innerHTML = getRandomInt(lowNr,highNr)
  }, 1000);
}else{
  alert('Please fill both of the numbers')
}}

