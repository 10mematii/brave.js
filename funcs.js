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

module.exports = {
  generateRandomNumber,
  capitalizeString,
  reverseString
};
