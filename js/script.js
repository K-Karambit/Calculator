var num1 = "";
var num2 = "";
var arr = [];
var ans;

function sendNum(digit) {
  arr.push(digit);
  if (arr.length != 1) {
    num1 = "";
    document.getElementById("Screen").innerHTML = num1;
  }

  for (i = 0; i < arr.length; i++) {
    num1 = num1 + arr[i];
  }

  document.getElementById("Screen").innerHTML = num1;
  LimitChecker();
}

setTimeout(LimitChecker, 2000);
function LimitChecker() {
  if (arr.length > 16) {
    alert("You have exceeded the limit of 16 digits. Please try again.");
    document.getElementById("Screen").innerHTML = "";
    while (arr.length > 0) {
      arr.pop();
    }
    num1 = "";
    num2 = "";
  }
}

function ClearScreen() {
  document.getElementById("Screen").innerHTML = "";
  if (arr.length > 0) {
    arr.pop();
  }
  num1 = "";
  num2 = "";
}

function equalTo() {
  document.getElementById("Screen").innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    num2 += arr[i];
  }
  ans = eval(num2);
  document.getElementById("Screen").innerHTML = num1 + "<br>" + ans;
  while (arr.length > 0) {
    arr.pop();
  }  

  while (arr.length > 0) {
    arr.pop();
  }

  History();
}

function History() {
  var history = document.getElementById("History");
  var newHistory = document.createElement("div");
  newHistory.innerHTML = num1 + " = " + ans;
  history.appendChild(newHistory);

  if (history.childElementCount > 20) {
    history.removeChild(history.firstChild);
  }
}

function ClearHistory() {
  var remove = document.getElementById("History");
  remove.parentNode.removeChild(remove);
}
