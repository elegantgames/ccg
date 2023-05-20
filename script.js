let input = document.getElementById("inputsearch");
let cards = document.getElementById("cards");
let body = document.getElementById("body");

let card = [];
let img = [];
let title = [];

// --------My Foods Array---------------

function Food(id, title, url, method) {
  this.id = id;
  this.title = title;
  this.url = url;
  this.method = method;
}

const pizzaMethod = `Place a pizza stone on a rack in the lower third of your oven. Preheat the oven to 475°F for at least 30 minutes, preferably an hour. If you don't have a pizza stone, you can use a pizza pan or a thick baking sheet;
 you need something that will not warp at high temperatures.`;
const spaghettiMethod = `Don't add oil. The first thing to know is that adding oil to the water has no effect, as it floats on the top of the water. The second thing to know is that adding oil to cooked spaghetti
 will make any sauce slide off it - again, not what you want.`;
const beafiMethod = `This slow roasting method at low heat is good for tougher cuts of beef; the lower heat prevents gristle from getting too tough. Roast beef made this way is easy, relatively inexpensive (compared to other cuts of beef), 
and you get great leftovers for roast beef sandwiches.`;
const chickeniMethod = `Chicken breasts are admittedly a challenge to cook evenly because of their shape. They are thicker on one side, and they thin out and taper on the other. It’s best to flatten the thick end so that the entire piece is level. Place the chicken in a plastic bag, then use a meat 
mallet or rolling pin to pound. Shoot for about ½ to ¾ inch thickness.`;
const fishiMethod = `According to Healthline, cooking meats and fish over high heat and an open flame have been linked to the formation of a number of compounds that are connected with things like heart disease and diabetes, but there are precautions to take — like making sure you thaw your fish first to 
shorten the cooking time, and not putting it directly over a flame`;
const potatoiMethod = `Place potatoes into a pot with a steamer insert and enough water to reach the bottom of the potatoes. Place a lid on top and turn the heat to medium-high. The steam gets hotter than boiling in water, allowing the potatoes to cook faster.
After about 15-20 minutes the potatoes should be fork-tender and ready for mashed potatoes.`;

const pizza = new Food(1, "pizza", "./ax/pizza.jpeg", pizzaMethod);
const spaghetti = new Food( 2,"spaghetti","./ax/spaghetti.jpeg",spaghettiMethod);
const beaf = new Food(3, "beef", "./ax/beef.jpeg", beafiMethod);
const chicken = new Food(4, "chicken", "./ax/chicken.jpeg", chickeniMethod);
const fish = new Food(5, "fish", "./ax/fish.jpeg", fishiMethod);
const potato = new Food(6, "potato", "./ax/potato.jpeg", potatoiMethod);

let foods = [pizza, spaghetti, beaf, chicken, fish, potato];

// --------creating cards at first on bases of Food Array---------------
generateCards(foods);

function generateCards(x) {
  for (let i = 0; i < x.length; i++) {
    card[i] = document.createElement("div");
    card[i].classList = "card";
    card[i].id = i + 1;
    card[i].title = x[i].title;
    card[i].method = x[i].method;
    img[i] = document.createElement("img");
    img[i].classList = "img";
    img[i].src = x[i].url;
    img[i].title = x[i].title;
    img[i].method = x[i].method;
    title[i] = document.createElement("div");
    title[i].classList = "titlecard";
    title[i].title = x[i].title;
    title[i].method = x[i].method;
    title[i].innerHTML = x[i].title.toUpperCase();
    cards.className = "cards";
    cards.appendChild(card[i]);
    card[i].appendChild(img[i]);
    card[i].appendChild(title[i]);
    cards.removeAttribute("id");
    cards.removeAttribute("class");
    cards.classList.add(`cards${x.length}`);
    card[i].addEventListener("click", showDetails);
    img[i].addEventListener("click", showDetails);
    title[i].addEventListener("click", showDetails);
  }
}



// --------removing All Cards from screen and Filtering cards after pressing button---------------

function removingAndFiltering() {

  
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
  const filtered = foods.filter((p) => {
    return p.title.includes(input.value.toLowerCase());
  });
  

  generateCards(filtered);
}




let Explanation;
let titleExplanation;
let closeBtn;
let activeSelection = true;



function showDetails(e) {
  if (activeSelection == true) {
    Explanation = document.createElement("div");
    Explanation.classList = "Explanation";

    titleExplanation = document.createElement("div");
    titleExplanation.classList = "titleExplanation";
    titleExplanation.innerHTML = e.target.title;

    methodExplanation = document.createElement("div");
    methodExplanation.classList = "methodExplanation";
    methodExplanation.innerHTML = e.target.method;

    Explanation.appendChild(titleExplanation);
    Explanation.appendChild(closeBtn);
    Explanation.appendChild(methodExplanation);

    body.appendChild(Explanation);
  }
  activeSelection = false;
}

document.addEventListener("DOMContentLoaded", () => {
  closeBtn = document.createElement("i");
  closeBtn.id = "closeBtn";
  closeBtn.class = "fa-solid fa-circle-xmark";

  closeBtn.addEventListener("click", close);
  function close() {
    activeSelection = true;
    body.removeChild(Explanation);
  }
});
