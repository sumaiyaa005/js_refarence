// add
function add() {
  let y = 5;
  let x = y + 2;
  document.getElementById("demo1").innerHTML = "Value of x is: " + x;
}
// sub
function sub() {
  let y = 10;
  let x = y - 2;
  document.getElementById("demo2").innerHTML = "Value of x is: " + x;
}

// multiplication
function mul() {
  let y = 20;
  let x = y * 2;
  document.getElementById("demo3").innerHTML = "Value of x is: " + x;
}

// Exponentiation
function exp() {
  let y = 5;
  let x = y ** 2;
  document.getElementById("demo4").innerHTML = "Value of x is: " + x;
}

// Division
function divi() {
  let y = 10;
  let x = y / 2;
  document.getElementById("demo5").innerHTML = "Value of x is: " + x;
}

// Remainder
function rem() {
  let y = 10;
  let x = y % 2;
  document.getElementById("demo6").innerHTML = "Value of x is: " + x;
}

// Pre increment
function pre() {
  let y = 5;
  let x = ++y;
  document.getElementById("demo7").innerHTML = "Value of y: " + y;
  document.getElementById("demo8").innerHTML = "Value of x: " + x;
}

// Post increment
function post() {
  let y = 5;
  let x = y++;
  document.getElementById("demo9").innerHTML = "Value of y: " + y;
  document.getElementById("demo10").innerHTML = "Value of x: " + x;
}

// Pre decrement
function pre_d() {
  let y = 5;
  let x = --y;
  document.getElementById("demo11").innerHTML = "Value of y: " + y;
  document.getElementById("demo12").innerHTML = "Value of x: " + x;
}

// Post decrement
function post_d() {
  let y = 5;
  let x = y--;
  document.getElementById("demo13").innerHTML = "Value of y: " + y;
  document.getElementById("demo14").innerHTML = "Value of x: " + x;
}

// equal
function equal() {
  let x = 10;
  let y = 5;
  x = y;
  document.getElementById("demo15").innerHTML = "Value of x is: " + x;
}

// add equal
function add_e() {
  let x = 10;
  let y = 5;
  x += y;
  document.getElementById("demo16").innerHTML = "Value of x is: " + x;
}

// size
function size() {
  const size = { x: 5, y: 10, z: 1 };

  document.getElementById("demo17").innerHTML = "The width is " + size.x;
}

// con

function con() {
  let text1 = "Good ";
  let text2 = "Morning";
  let text3 = " sumu";

  let text4 = text1 + text2 + text3;
  document.getElementById("demo18").innerHTML = text4;
}

// con equ

function con() {
  let text1 = "Good ";
  let text2 = "Morning";
  text1 += text2;

  document.getElementById("demo19").innerHTML = text1;
}
