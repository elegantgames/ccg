let input = document.getElementById("inputsearch");
let cards = document.getElementById("cards");
let body = document.getElementById("body");

let card = [];
let img = [];

// --------My Foods Array---------------

function Food(id, title, ingredients, url, method) {
  this.id = id;
  this.title = title;
  this.ingredients = ingredients;
  this.url = url;
  this.method = method;
}
const pizzaMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const spagetiMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const beafiMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const chickeniMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const fishiMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const potatoiMethod = `jhk cajkhjkn hj touy fgdfgd dfgghf dfgdgdg hfghgfh fghfgfh
hhjghj fghfghfghf ghfgfh fdgdgdg khkhkhk`;
const pizza = new Food(1, "pizza", {}, "./ax/about.jpg", pizzaMethod);
const spageti = new Food(2, "spageti", {}, "./ax/user1.jpg", spagetiMethod);
const beaf = new Food(3, "beaf", {}, "./ax/washington.png", beafiMethod);
const chicken = new Food(4, "chicken", {}, "./ax/library.png", chickeniMethod);
const fish = new Food(5, "fish", {}, "./ax/london.png", fishiMethod);
const potato = new Food(6, "potato", {}, "./ax/newyork.png", potatoiMethod);

let foods = [pizza, spageti, beaf, chicken, fish, potato];

// --------creating cards at first on bases of Food Array---------------

for (let i = 0; i < foods.length; i++) {
  card[i] = document.createElement("div");
  card[i].classList = "card";
  card[i].id = i + 1;
  card[i].title = foods[i].title;
  card[i].method = foods[i].method;

  img[i] = document.createElement("img");
  img[i].classList = "img";
  img[i].src = foods[i].url;
  img[i].title = foods[i].title;
  img[i].method = foods[i].method;

  cards.className = "cards";
  card[i].innerHTML = foods[i].title.toUpperCase();
  cards.appendChild(card[i]);

  card[i].appendChild(img[i]);
}

eventActivate();

let Explanation;
let titleExplanation;
let closeBtn;
let activeSelection = true;

// --------removing All Cards from screen and Filtering cards after pressing button---------------

function removingAndFiltering() {
  // --------removing all cards after pressing button---------------

  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }

  // -------- creating filtered array after pressing button---------------
  const filtered = foods.filter((p) => {
    return p.title.includes(input.value);
  });

  // -------- showing filtered foods on screen after pressing button---------------

  function doFilter() {
    for (let i = 0; i < filtered.length; i++) {
      card[i] = document.createElement("div");
      card[i].classList = "card";
      card[i].id = i + 1;
      card[i].title = filtered[i].title;
      card[i].method = filtered[i].method;

      img[i] = document.createElement("img");
      img[i].classList = "img";
      img[i].src = filtered[i].url;
      img[i].title = filtered[i].title;
      img[i].method = filtered[i].method;

      card[i].innerHTML = filtered[i].title.toUpperCase();
      cards.appendChild(card[i]);
      card[i].appendChild(img[i]);
    }
    console.log(filtered.length);
    if (filtered.length == 1) {
      cards.removeAttribute("id");
      cards.removeAttribute("class");
      cards.classList.add("cards1");
    }
    if (filtered.length == 2) {
      cards.removeAttribute("id");
      cards.removeAttribute("class");
      cards.classList.add("cards2");
    }
    if (filtered.length == 3) {
      cards.removeAttribute("id");
      cards.removeAttribute("class");
      cards.classList.add("cards3");
    }




    if (filtered.length == 4) {
      cards.removeAttribute("id");
      cards.removeAttribute("class");
      cards.classList.add("cards4");
      
    }



    if (filtered.length == 6) {
      cards.removeAttribute("id");
      cards.removeAttribute("class");
      cards.id = "cards";
    }

    eventActivate();
  }

  setTimeout(doFilter, 0.001);
}

function eventActivate() {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", showDetails);
    img[i].addEventListener("click", showDetails);
  }
}

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
  closeBtn = document.createElement("div");
  closeBtn.id = "closeBtn";

  closeBtn.addEventListener("click", close);
  function close() {
    activeSelection = true;
    body.removeChild(Explanation);
  }
});
