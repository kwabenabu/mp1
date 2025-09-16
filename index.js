// Ok this are my two inputs and i used he lecture js get elememnt
let one=document.getElementById("one");
let two=document.getElementById("two");
let output=document.getElementById("output");
// add function from disucsion
function doAdd(){
  let result = Number(one.value) + Number(two.value);
  output.innerHTML = result;
  if (result < 0) {
    output.style.color = 'red';
  } else {
    //TA SALLY recommended output.style.color
    output.style.color = '';
  }
}
// switched it for subtract
function doSubtract() {
  let result = Number(one.value) - Number(two.value);
  output.innerHTML = result;
  if (result < 0) {
    output.style.color = 'red';
  } else {
    output.style.color = '';
  }
}
//bs same with multiply
function doMultiply() {
  let result = Number(one.value) * Number(two.value);
  output.innerHTML = result;
  if (result < 0) {
    output.style.color = 'red';
  } else {
    output.style.color = '';
  }
}
//division is diffrent 
function doDivide() {
  if (Number(two.value) === 0) {
    //divide by zero 
    output.innerHTML = "Error: divide by zero";
    output.style.color = 'red';
    //
  } else {
    let result = Number(one.value) / Number(two.value);
    output.innerHTML = result;
    if (result < 0) {
      output.style.color = 'red';
    } else {
      output.style.color = '';
    }
  }
}
function doPower(){
    //simple python power did it cs111 same thing
  let base = Number(one.value);
  let exponent = Number(two.value);
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  output.innerHTML = result;
  if (result < 0) {
    output.style.color = 'red';
  } else {
    output.style.color = '';
  }
}
function doClear(){
  one.value = "";
  two.value = "";
  output.innerHTML = "";

}