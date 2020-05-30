var user = prompt('enter your name ');
var user2 = prompt('who are you settling dispute with? enter their name');

var firstCharacter = user.slice(0,1);
var capitalFirstLetter =  firstCharacter.toUpperCase();
var secondPart = user.slice(1,user.length);
user = capitalFirstLetter + secondPart.toLowerCase();

var firstCharacter1 = user2.slice(0,1);
var capitalFirstLetter1 =  firstCharacter1.toUpperCase();
var secondPart1 = user2.slice(1,user2.length);
user2 = capitalFirstLetter1 + secondPart1.toLowerCase();


  document.querySelector('.user').innerText = `${user}`;
  document.querySelector('.user2').innerText = `${user2}`;



function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6)+1;
  var randomNumber2 = Math.floor(Math.random() * 6)+1;
  document.querySelector('.img1').setAttribute('src',`images/dice${randomNumber1}.png`);
  document.querySelector('.img2').setAttribute('src',`images/dice${randomNumber2}.png`);



  if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerText = `🚩 ${user} Wins`;
  }else if(randomNumber2 > randomNumber1 ) {
    document.querySelector('h1').innerText = `${user2} Wins 🚩`;
  }else{
    document.querySelector('h1').innerText = 'Draw';
  }

}
