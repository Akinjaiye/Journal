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
    for (let i = 0; i < this.body.length; i++) {
        if (vowelArr.includes(this.body[i])) {
          totalVowels++;
        }
        else if (this.body[i] != " ") {
          totalConsonants++;
        }
      }
      return [totalVowels, totalConsonants];
    };

    export  function getTeaser(passage){
        const wordSplit = passage.split(" ");
        const teaserWord = [];
        for(let i = 0; i < 9; i++){
          teaserWord.push(wordSplit[i]);
        }
        return teaserWord;
      }
    