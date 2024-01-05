//button onclick

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("button");
  if (button) {
    addEventListener("click", function () {
      alert("you clicked the button!");
    });
  } else {
    console.error("button not found");
  }
});

doOperation();

console.log("Say");
console.log("Hi");

setTimeout(() => {
  console.log("bye");
}, 3000);
console.log("and then");

//synchronous code example from MDN

const name = "Sally";
const greeting = `Hi, my name is ${name}`;
console.log(greeting);

const place = "CA";
const phrase = `This is ${place}`;
console.log(phrase);

//example using function is also synchronous

function sayGreeting(name) {
  return `Hi, my name is ${name}`;
}

//callbacks from MDN

function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  //   console.log(`result: ${result}`);
}
doOperation();

//implementing the steps using asynchronous callbacks

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        // console.log(`result: ${result3}`);
      });
    });
  });
}
