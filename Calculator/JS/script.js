function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else if (checkIsOperator(input)) {
    if (checkExistingOperator(character, input.value[input.value.length - 1])) {
      alert('operator already exist')
    }
    else {
      input.value = input.value.substring(0, input.value.length + 1) + character;
    }
  }
  else input.value += character;
}

function checkExistingOperator(character, oldChar) {
  if (character == oldChar) {
    return true;
  }
  else {
    return false;
  }
}

function checkIsOperator(input) {
  let oldChar = input.value[input.value.length - 1];
  if (oldChar == "/" || oldChar == "*" || oldChar == "+" || oldChar == "-" || oldChar == "%") {
    return true;
  }
  else {
    return false;
  }
}

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
  console.log('form.display.value: ', form.display.value);

}

function ln(form) {
  form.display.value = Math.log(form.display.value);
}

function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

function ceil(form) {
  form.display.value = Math.ceil(form.display.value);
}

function cuberoot(form) {
  form.display.value = Math.cbrt(form.display.value);
}

function cube(form) {
  form.display.value = Math.pow(form.display.value, 3);
}

function floor(form) {
  form.display.value = Math.floor(form.display.value);
}

function rand(form) {
  form.display.value = Math.random(form.display.value);
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}
