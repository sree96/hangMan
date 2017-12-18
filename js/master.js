const countrySelector=function (wordList) {
  return wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
};

const dashTextGenarator=function (word) {
  let dashText="-";
  return dashText.repeat(word.length);
};

const letterValidator=function (word,letter) {
  return word.includes(letter);
};

const textGenarator=function (currentWordText,word,letter) {
  let indices=findIndices(word,letter);
  let newWordText=textModifier(currentWordText,indices,letter);
  return newWordText;
};

const findIndices=function (word,letter) {
  let index,indices=[];
  for (index = 0; index < word.length; index++) {
    if (word[index]==letter) {
      indices.push(index);
    }
  }
  return indices;
};

const textModifier=function (currentWordText,indices,letter) {
  let splited=currentWordText.split('');
  let newWordText=indices.forEach(function (element) {
    splited[element]=letter;
  });
  return splited.join('');
};

const isWon=function (word,currentWordText) {
  return word==currentWordText;
};
