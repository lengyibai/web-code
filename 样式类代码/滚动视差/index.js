const imgs = [
  "https://picsum.photos/1920/1080?t=1",
  "https://picsum.photos/1920/1080?t=2",
  "https://picsum.photos/1920/1080?t=3",
  "https://picsum.photos/1920/1080?t=4",
  "https://picsum.photos/1920/1080?t=5",
];

const scrollContainer = document.querySelector(".scroll-container");

let current_index = 0;

const createItem = (index) => {
  console.log(index);
  const imgUrl = imgs[index];
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `<img src="${imgUrl}" />`;
  scrollContainer.append(item);
  return item;
};

const resetElements = () => {
  scrollContainer.innerHTML = "";
  const prevIndex = current_index - 1 < 0 ? imgs.length - 1 : current_index - 1;
  const nextIndex = current_index + 1 > imgs.length - 1 ? 0 : current_index + 1;

  createItem(prevIndex).classList.add("prev");
  createItem(current_index).classList.add("cur");
  createItem(nextIndex).classList.add("next");
};

resetElements();

let isAnimating = false;
scrollContainer.addEventListener("wheel", (e) => {
  if (!e.deltaY) return;

  if (isAnimating) return;
  isAnimating = true;
  if (e.deltaY > 0) {
    scrollContainer.classList.add("scroll-down");
    current_index = current_index + 1 > imgs.length - 1 ? 0 : current_index + 1;
  } else {
    scrollContainer.classList.add("scroll-up");
    current_index = current_index - 1 < 0 ? imgs.length - 1 : current_index - 1;
  }
});

scrollContainer.addEventListener("transitionend", () => {
  isAnimating = false;
  scrollContainer.classList.remove("scroll-down");
  scrollContainer.classList.remove("scroll-up");
  resetElements();
});
