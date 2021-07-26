var rightBoxDisplay = document.querySelector('.meal-radio');
var rightBoxText = document.querySelector('.right-box-content');
var randomSideDishBtn = document.querySelector('#side-dish');
var randomMainDishBtn = document.querySelector('#main-dish');
var randomDessertDishBtn = document.querySelector('#dessert-dish');
var randomEntireMealBtn = document.querySelector('#meal');
var cookButton = document.querySelector('.cook-button');
var clearButton = document.querySelector('.clear-button');
var dishDisplayed = document.querySelector('.dish-displayed');
var displayRecipe = document.querySelector('.display-recipe');
var potImage = document.querySelector('.pot');
var rightPrompt = document.querySelector('.prompt2');


cookButton.addEventListener('click', displayRandomDish);
clearButton.addEventListener('click', clearRecipe);


function getRandomFood(array) {
  return Math.floor(Math.random() * array.length); 
}


function clearRecipe() {
  if (clearButton.checked === true) {
    displayRecipe.classList.remove('hidden');
    rightPrompt.classList.remove('hidden');
    clearButton.classList.remove('hidden');
    potImage.classList.add('hidden');
  }
}


function displayRandomDish() {
  event.preventDefault()
  displayRecipe.classList.remove('hidden');
  rightPrompt.classList.remove('hidden');
  potImage.classList.add('hidden');
  if (randomSideDishBtn.checked === true) {
    displayRecipe.innerText = sides[getRandomFood(sides)];
    clearButton.classList.remove('hidden');
  } else if (randomMainDishBtn.checked === true) {
    displayRecipe.innerText = mains[getRandomFood(mains)];
    clearButton.classList.remove('hidden');
  } else if (randomDessertDishBtn.checked === true) {
    displayRecipe.innerText = desserts[getRandomFood(desserts)];
    clearButton.classList.remove('hidden');
  } else {
    clearRecipe;
  }
}