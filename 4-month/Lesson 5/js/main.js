//? Book store
const cardsWrapperEl = document.querySelector("#cards__wrapper");
const cartQtyEl = document.querySelector(".product__quantity");

const database = JSON.parse(localStorage.getItem("products")) || [
  {
    id: "1",
    title: "Molxona",
    price: 100,
    imageUrl:
      "https://assets.asaxiy.uz/product/items/desktop/2e2c080d5490760af59d0baf5acbb84e2022042720450413643XcaqBd9OB1.jpg.webp",
    description: "Molxona judayam zo'r kitob ekan!",
  },
  {
    id: "2",
    title: "Qo'yxona",
    price: 80,
    imageUrl: "https://kitobxon.com/img_knigi/2569.jpg",
    description: "Qo'yxona judayam zo'r kitob ekan!",
  },
  {
    id: "3",
    title: "Parrandachilik",
    price: 20,
    imageUrl: "https://kitobxon.com/img_knigi/2576.jpg",
    description: "Parrandachilik sirlari yo'q ekan!",
  },
];

const cart = JSON.parse(localStorage.getItem("cart")) || {
  prods: [],
  totalPrice: 0,
  quantity: 0,
};

render();

function addToCart(id, price) {
  const foundProdIndex = cart.prods.findIndex((prod) => {
    return prod.id === id;
  });

  if (foundProdIndex === -1) {
    cart.prods.push({
      id,
      qty: 1,
    });
  } else {
    cart.prods[foundProdIndex].qty += 1;
  }

  cart.totalPrice += price;
  cart.quantity += 1;

  cartQtyEl.innerHTML = cart.prods.length;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function render() {
  database.forEach((book) => {
    const { id, title, imageUrl, price, description } = book;
    const cardTemp = `
      <div class="card border-1 border-dark" style="width: 18rem">
        <img src="${imageUrl}" class="card-img-top" alt="${title}" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h3>$${price}</h3>
          <p class="card-text">
            ${description}
          </p>

          <div class="d-flex align-items-center justify-content-between">
            <button class="btn btn-outline-primary" onclick="addToCart(${id}, ${price})">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

            <span class="like__btn" data-product-id="${id}">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
    `;
    cardsWrapperEl.innerHTML += cardTemp;

    cartQtyEl.innerHTML = cart.prods.length;
  });
}
