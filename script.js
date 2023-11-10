let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteByOne() {
  display.value = display.value.toString().slice(0, -1);
}

function appendToDisplay(value) {
  display.value += value;
}

function calculatePercentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
