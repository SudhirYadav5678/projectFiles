const display=document.getElementById('display')
const displayNO=function(input){
    display.value += input;
 }
const Clear= function(){
    display.value="";
 }
const calculate=function(){
    display.value=eval(display.value)
}