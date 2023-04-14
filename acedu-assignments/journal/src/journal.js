export function Journal(title, body) {
    this.title = title;
    this.body = body;
  }

  Journal.prototype.wordCounter = function () {
    let totalWords = 0;
    let wordArray = this.body.split(" ");
    totalWords = wordArray.length;
    return totalWords;
  };

  Journal.prototype.charCounter = function () {
    let vowelArr = ["a", "i", "o", "e", "u"];
    let totalVowels = 0;
    let totalConsonants = 0;