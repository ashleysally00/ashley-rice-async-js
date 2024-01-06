// //button onclick

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

//say Hi

doOperation();

console.log("Say");
console.log("Hi");

setTimeout(() => {
  console.log("bye");
}, 3000);
console.log("and then");

// //synchronous code example from MDN

const name = "Sally";
const greeting = `Hi, my name is ${name}`;
console.log(greeting);

const place = "CA";
const phrase = `This is ${place}`;
console.log(phrase);

//synchronous code example from MDN using function

function sayGreeting(nombre) {
  return `Hi, my name is ${nombre}`;
}

const nombre = "Duncan";
const phraseA = sayGreeting(nombre);
console.log(phraseA);

// //synchronous function that takes a long time, MDN
const MAX_PRIME = 100000;
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating  ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});

//event handlers MDN: I couldn't get this one to work right even after commenting out the rest of js file and parts of html that might be blocking; will come back to it later

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
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
