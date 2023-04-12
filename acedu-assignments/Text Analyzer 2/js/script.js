function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0))
}


function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOcccurrencesInText(word, text){
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element){
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++
    }
  });
  return wordCount;
}

function sentenceCount(sentence){
  let sentenceCount = 0;
  if (sentence.trim().length === 0){
    return 0;
  }
  const sentenceArray = sentence.split(".");
  sentenceArray.forEach(function (element){
    sentenceCount++;
  })
  return sentenceCount;
}

function mostCommonWord(str){
  let stringArray = str.split(" ");
  let result = "<p>";
  
  stringArray.forEach(function(element){

    result += element.concat(":" + " " + numberOfOcccurrencesInText(element, str)) + "<br>"
    
  })
  return result + "</p>"
};

function boldPassage(word, text) {
  if (noInputtedWord(word, text)){
    return 0;
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else{
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }  
  });
  return htmlString + "</p>";  
}

function firstInstanceOfWord(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const textArray = text.split(" ");
  for (let index = 0; index < textArray.length; index);
}



$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    const textPassage = $("#text-passage").val();
    const word = $("#word").val();

    
    $("#text-word").text(wordCounter(textPassage));
    $("#text-sentences").text(sentenceCount(textPassage))
    $(".word").text(word);
    $("#word-times").text(numberOfOcccurrencesInText(word, textPassage))
    $("#bold-pass").html(boldPassage(word, textPassage))
    $("#threeMostCommon").html(mostCommonWord(textPassage))
    $(".ans-block").show();

  })
})  