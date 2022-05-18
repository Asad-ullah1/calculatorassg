function getValue(num){
var input = document.getElementById("output");

  input.value += num;
}
function allClear() {
  var input = document.getElementById("output");
  console.log(input);
  input.value = "";
}
function Calculate() {
  var input = document.getElementById("output");
 
  input.value = eval(input.value);
}
function valueRemove(){
  var input = document.getElementById("output")
  input.value = input.value.slice(0,-1)
}