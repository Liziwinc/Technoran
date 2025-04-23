const newsData = [
  {
    title: "Закончена установка системы холодоснабжения",
    imageLarge: "../img/news_5.jpg",
    image: "../img/news_5.jpg",
    data: "18 Апреля",
    text: "Закончена установка системы холодоснабжения.",
  }, 
  {
    title: "Прокладка инженерных сетей подходит к завершению",
    imageLarge: "../img/news_3.jpg",
    image: "../img/news_3_3.jpg",
    data: "15 Апреля",
    text: "Прокладка инженерных сетей на объекте ООО «Центр пептидных технологий» подходит к завершению.",
  },
  {
    title: "Начат монтаж чистых зон в помещениях",
    imageLarge: "../img/news_1.jpg",
    image: "../img/news_1_1.jpg",
    data: "10 Февраля",
    text: "В помещениях объекта ООО «Центр пептидных технологий» начался монтаж чистых зон.",
  },
  {
    title: "Закончены строительно-монтажные работы по закольцовке газопровода",
    imageLarge: "../img/news_4.jpg",
    image: "../img/news_4_4.jpg",
    data: "25 Января",
    text: "Совместно с ООО «ТЕЗИС» закончили строительно-монтажные работы по закольцовке газопровода для нужд производства ООО «ЦПТ» в ОЭЗ Новоорловская.",
  }, 
  {
    title: "Закончены работы по монтажу собственной газовой котельной",
    imageLarge: "../img/news_2.jpg",
    image: "../img/news_2_2.jpg",
    data: "29 Января",
    text: "На объекте ООО «ЦПТ» закончены работы по монтажу собственной газовой котельной.",
  },
];

const newsContainer = document.getElementById("news-container");
const popupContainer = document.getElementById("popup-container");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");
const popupDate = document.getElementById("popup-date");
// 
const popupPrev = document.getElementById("popup-prev");
const popupNext = document.getElementById("popup-next");
let currentNewsIndex = 0;


// const openPopup = (item) => {
//   popupImage.src = item.imageLarge;
//   popupImage.alt = item.title;
//   popupTitle.textContent = item.title;
//   popupText.textContent = item.text;
//   popupContainer.style.display = "flex";
//   popupContainer.setAttribute("aria-hidden", "false");
//   popupContainer.setAttribute("aria-modal", "true");
//   document.body.style.overflow = "hidden";
//   popupDate.textContent = item.data;
// };
const openPopup = (item, index) => {
  currentNewsIndex = index;
  popupImage.src = item.imageLarge;
  popupImage.alt = item.title;
  popupTitle.textContent = item.title;
  popupText.textContent = item.text;
  popupDate.textContent = item.data;
  popupContainer.style.display = "flex";
  popupContainer.setAttribute("aria-hidden", "false");
  popupContainer.setAttribute("aria-modal", "true");
  document.body.style.overflow = "hidden";
};


const closePopup = () => {
  popupContainer.style.display = "none";
  popupContainer.setAttribute("aria-hidden", "true");
  popupContainer.removeAttribute("aria-modal");
  document.body.style.overflow = "";
};

newsData.forEach((item, index) => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const newsTitle = document.createElement("h2");
  newsTitle.classList.add("news-title");
  newsTitle.textContent = item.title;

  const newsContent = document.createElement("div");
  newsContent.classList.add("news-content");

  const newsImage = document.createElement("img");
  newsImage.src = item.image;
  newsImage.alt = item.title;
  newsImage.loading = "lazy";

  const newsText = document.createElement("p");
  newsText.textContent = item.text;

  const newsDate = document.createElement("span");
  newsDate.classList.add("news-date");
  newsDate.textContent = item.data;

  newsContent.appendChild(newsImage);
  newsContent.appendChild(newsText);
  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsContent);
  newsItem.appendChild(newsDate);

  newsItem.addEventListener("click", () => openPopup(item, index));

  newsContainer.appendChild(newsItem);
});

popupClose.addEventListener("click", closePopup);
popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) closePopup();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupContainer.style.display === "flex") {
    closePopup();
  }
});

popupPrev.addEventListener("click", () => {
  currentNewsIndex = (currentNewsIndex - 1 + newsData.length) % newsData.length;
  openPopup(newsData[currentNewsIndex], currentNewsIndex);
});

popupNext.addEventListener("click", () => {
  currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
  openPopup(newsData[currentNewsIndex], currentNewsIndex);
});

