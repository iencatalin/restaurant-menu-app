const menu = [
  {
    id: 1,
    title: "caesar",
    category: "salads",
    img: "images/avocado.png",
    price: "28 lei",
    desc: `iceberg lettuce, grana padano, chery tomatoes, anchovy`,
  },
  {
    id: 2,
    title: "steak knife wedge",
    category: "salads",
    img: "./images/avocado.png",
    price: "22 lei",
    desc: `iceberg lettuce, chery tomatoes, crisppy prosciuto, blue cheese `,
  },
  {
    id: 3,
    title: "italian salad",
    category: "salads",
    img: "./images/avocado.png",
    price: "28 lei",
    desc: `iceberg lettuce, chery tomatoes, garlic, olives, dressing`,
  },
  {
    id: 4,
    title: "oxtail soup",
    category: "salads",
    img: "./images/avocado.png",
    price: "22 lei",
    desc: `braised oxtail, seasonal vegetables`,
  },
  {
    id: 5,
    title: "french onion soup",
    category: "salads",
    img: "./images/avocado.png",
    price: "22 lei",
    desc: ` crusty bread slices and melted cheese`,
  },
  {
    id: 6,
    title: "asian seafood soup",
    category: "salads",
    img: "./images/avocado.png",
    price: "58 lei",
    desc: `mussels, shrimp clams, shitake mshrooms, green peas, lime`,
  },
  {
    id: 7,
    title: "grilled red tuna steak",
    category: "fish",
    img: "./images/avocado.png",
    price: "59 lei",
    desc: ` tuna fillets, celery puree with green curry`,
  },
  {
    id: 8,
    title: "pan seared red snapper",
    category: "fish",
    img: "./images/avocado.png",
    price: "48 lei",
    desc: `broccoli, grana padano crisps, hollaindaise sauce`,
  },
  {
    id: 9,
    title: " salmon rissoto",
    category: "fish",
    img: "./images/avocado.png",
    price: "48 lei",
    desc: `salmon, rice, lemon, fennel, dill`,
  },

  {
    id: 10,
    title: "braised and grilled ribs",
    category: "main",
    img: "./images/avocado.png",
    price: "54 lei",
    desc: ` with BBQ sauce and mixed greens salad`,
  },

  {
    id: 11,
    title: "herb-crusted new zeeland rack of lamb",
    category: "main",
    img: "./images/avocado.png",
    price: "74 lei",
    desc: `with yogurt and mint sauce`,
  },

  {
    id: 12,
    title: "porterhouse pork steak",
    category: "main",
    img: "./images/avocado.png",
    price: "44 lei",
    desc: `fresh herbs`,
  },

  {
    id: 13,
    title: "slow cooked beef cheeks in red wine sauce",
    category: "main",
    img: "./images/avocado.png",
    price: "52 lei",
    desc: ``,
  },

  {
    id: 14,
    title: "seared duck breast",
    category: "main",
    img: "./images/avocado.png",
    price: "56 lei",
    desc: ``,
  },

  {
    id: 15,
    title: "baked crispy coquelet",
    category: "main",
    img: "./images/avocado.png",
    price: "56 lei",
    desc: ``,
  },

  {
    id: 16,
    title: "spaghetti carbonara",
    category: "main",
    img: "./images/avocado.png",
    price: "38 lei",
    desc: ``,
  },

  {
    id: 17,
    title: "tagliatelle with porcini and truffles",
    category: "main",
    img: "./images/avocado.png",
    price: "42 lei",
    desc: `fresh pasta`,
  },

  {
    id: 18,
    title: "ribeye steak tagliatelle",
    category: "main",
    img: "./images/avocado.png",
    price: "48 lei",
    desc: `fresh pasta, cherry tomatoes`,
  },
  {
    id: 19,
    title: "steakhouse fries",
    category: "potatoes",
    img: "./images/avocado.png",
    price: "11 lei",
    desc: ``,
  },
  {
    id: 20,
    title: "spicy potatoes wedge",
    category: "potatoes",
    img: "./images/avocado.png",
    price: "12 lei",
    desc: ``,
  },
  {
    id: 21,
    title: "mashed potatoes",
    category: "potatoes",
    img: "./images/avocado.png",
    price: "14 lei",
    desc: ``,
  },
  {
    id: 22,
    title: "the champ",
    category: "burgers",
    img: "./images/avocado.png",
    price: "48 lei",
    desc: ``,
  },
  {
    id: 23,
    title: "texas cheeseburger",
    category: "burgers",
    img: "./images/avocado.png",
    price: "42 lei",
    desc: ``,
  },
  {
    id: 24,
    title: "ben's cheeseburger",
    category: "burgers",
    img: "./images/avocado.png",
    price: "44 lei",
    desc: ``,
  },
  {
    id: 25,
    title: "tiramisu",
    category: "deserts",
    img: "./images/avocado.png",
    price: "20 lei",
    desc: ``,
  },
  {
    id: 26,
    title: "rosemary creme brulee",
    category: "deserts",
    img: "./images/avocado.png",
    price: "20 lei",
    desc: ``,
  },
  {
    id: 27,
    title: "lava cake",
    category: "deserts",
    img: "./images/avocado.png",
    price: "22 lei",
    desc: ``,
  },
  {
    id: 28,
    title: "artisanal ice cream",
    category: "deserts",
    img: "./images/avocado.png",
    price: "18 lei",
    desc: ``,
  },
  {
    id: 29,
    title: "ny cheesecake",
    category: "deserts",
    img: "./images/avocado.png",
    price: "20 lei",
    desc: ``,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
