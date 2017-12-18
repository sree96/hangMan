const startGame=function () {
  let randomWord=countrySelector(countries);
  let dashText=dashTextGenarator(randomWord);
  let wordTextId=document.getElementById('wordText');
  setText(dashText,wordTextId);
  loadGame(randomWord);
};

const setText=function (text,id) {
  id.innerText=text;
};

const loadGame=function (word) {
  let misses=0,letter='';
  let keyboard=document.getElementById('keyboard');
  keyboard.onclick=function (event) {
    letter=event.target.id;
    if (letterValidator(word,letter)) {
      let currentWordText=document.getElementById('wordText').innerText;
      let newWordText=textGenarator(currentWordText,word,letter);
      setText(newWordText,document.getElementById('wordText'));
      if (isWon(word,document.getElementById('wordText').innerText)) {
        displayAlert("!!!!YOU WON!!!!");
      }
    }
    else {
      if (!letterValidator(document.getElementById('error').innerText,letter)) {
        document.getElementById('error').innerText+=letter;
        misses++;
        let partOne=document.getElementById('partOne');
        let imgPath=`/img/hang_step_${misses}.png`
        partOne.style.backgroundImage="url("+imgPath+")"
      }
    }
    if (misses==7) {
      displayAlert("!!!!YOU LOOSE!!!!\nAnswer : "+word);
    }
  }
}

const displayAlert=function (text) {
  setTimeout(function () {
    alert(text);
    location.reload();
  },500);
}

window.onload=startGame;
