function updateOutput() {
  // calculator
  // get form
  var form = document.getElementById("calc");
  // get output
  var out = form.elements["carbon"];
  // get two numbers
  // replace all instances of parseFloat with parseInt if needing to force integers
  var num1 = parseFloat(form.elements["Netflix"].value);
  var num2 = parseFloat(form.elements["Hulu"].value);
  // get operator
  out.value = num1*440.565004 + num2*453.1525755;
}
