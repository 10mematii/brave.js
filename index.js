//Kelime ters çevirme
function reverseString(str) {
  return str.split("").reverse().join("");
}

//Random sayı
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//İlk harfi büyük harf yapma
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Örnek bir fonksiyon
function greet(name) {
  return `Merhaba, ${name}!`;
}
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  return a / b;
}

// Modülümüzün exports objesine fonksiyonu ekliyoruz
module.exports = {
  greet,
  add,
  subtract,
  multiply,
  divide,
  generateRandomNumber,
  capitalizeString,
  reverseString
};
