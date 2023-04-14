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