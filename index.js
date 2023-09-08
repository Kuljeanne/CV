//  render projects

const PROJECTS = [
  {
    title: "Plants",
    link: "https://rolling-scopes-school.github.io/kuljeanne-JSFEPRESCHOOL2022Q4/plants/",
    imgSrc: "assets/projects-img/plants.jpg",
    description:
      "Wedsite for plants-shop. Made with HTML, SCSS, JavaScript, responsive",
  },
  {
    title: "CSSBayan",
    link: "https://kuljeanne.github.io/cssBayan",
    imgSrc: "assets/projects-img/css-bayan.jpg",
    description: "Accordion made with pure CSS",
  },
  {
    title: "Momentum",
    link: "https://kuljeanne.github.io/momentum/dist/",
    imgSrc: "assets/projects-img/momentum.jpg",
    description:
      "A copy of an Chrome extansion featuring audio player, weather, inspirational quotes, google search. Input data is saved in localstorage",
  },
  {
    title: "Card Game",
    link: "https://kuljeanne.github.io/Card_game/dist/",
    imgSrc: "assets/projects-img/card-game.jpg",
    description:
      "Memory game with 3 levels of complexity. Made with TypeScript",
  },
  {
    title: "Rock, Papper, Scissors",
    link: "https://kuljeanne.github.io/RockPappperScissors/",
    imgSrc: "assets/projects-img/rock-papper-scissors.jpg",
    description: "Browser online game.",
  },
  {
    title: "KeyBoard",
    link: "https://kuljeanne.github.io/virtual-keyboard/dist/",
    imgSrc: "assets/projects-img/keyboard.png",
    description:
      "Virtual keyboard. For printing you can use either a phisical keyboard or the mouse",
  },
];

const PROJECTS_CONTAINER = document.querySelector(".projects__list");

const createNode = (nodeName, className, text) => {
  const node = document.createElement(nodeName);
  node.classList.add(className);
  if (text) node.textContent = text;
  return node;
};

const createProjectCard = ({ title, link, imgSrc, description }) => {
  const card = createNode("li", "projects__item");
  const background = createNode("div", "projects__background");
  background.style.backgroundImage = `url(${imgSrc})`;
  const projectTitle = createNode("h3", "projects__title", title);
  const text = createNode("p", "projects__text", description);
  const btn = createNode("a", "btn", "Show project");
  btn.classList.add("projects__btn");
  btn.href = link;
  btn.target = "_blank";
  card.append(background, projectTitle, text, btn);

  return card;
};

PROJECTS.map(({ title, link, imgSrc, description }) => {
  PROJECTS_CONTAINER.append(
    createProjectCard({ title, link, imgSrc, description })
  );
});

// burger menu

const BURGER = document.querySelector(".burger");
const MODILE_MENU_CONTAINER = document.querySelector(".menu_mobile");

const menu = document.querySelector(".menu__inner").cloneNode(1);
menu.classList.add("menu__inner_mobile");

BURGER.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  MODILE_MENU_CONTAINER.classList.toggle("open");
  BURGER.classList.toggle("active");
  renderPopup();
}

function renderPopup() {
  MODILE_MENU_CONTAINER.appendChild(menu);
}

window.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".background") || target.closest(".menu__item")) {
    closeOnClick();
  }
});

function closeOnClick() {
  MODILE_MENU_CONTAINER.classList.remove("open");
  BURGER.classList.remove("active");
}
