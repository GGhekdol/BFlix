const films = [
  {
    title: "Inception",
    type: "film",
    categories: ["popüler", "trend", "çok izlenen"],
    year: "2010",
    desc: "Rüyaların içinde geçen zihin bükücü bir bilim kurgu klasiği.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Inception%20(2010)%20theatrical%20poster.jpg"
  },
  {
    title: "Interstellar",
    type: "film",
    categories: ["popüler", "yeni", "çok izlenen"],
    year: "2014",
    desc: "İnsanlığın kaderini değiştirebilecek epik bir uzay yolculuğu.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Interstellar%20film%20poster.jpg"
  },
  {
    title: "Fight Club",
    type: "film",
    categories: ["popüler", "trend"],
    year: "1999",
    desc: "Kuralları altüst eden kült bir film deneyimi.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Fight%20Club%20poster.jpg"
  },
  {
    title: "The Matrix",
    type: "film",
    categories: ["film", "çok izlenen"],
    year: "1999",
    desc: "Gerçeklik algısını sorgulatan çığır açıcı bir aksiyon-bilim kurgu filmi.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/The%20Matrix.png"
  },
  {
    title: "The Shawshank Redemption",
    type: "film",
    categories: ["film", "çok izlenen"],
    year: "1994",
    desc: "Umut, dostluk ve özgürlüğü anlatan unutulmaz bir başyapıt.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/ShawshankRedemptionMoviePoster.jpg"
  },
  {
    title: "The Dark Knight",
    type: "film",
    categories: ["film", "trend", "çok izlenen"],
    year: "2008",
    desc: "Batman ve Joker arasındaki unutulmaz mücadeleyi anlatan modern klasik.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/The%20Dark%20Knight%20movie%20poster%20-%20censored%20copyright.jpg"
  },
  {
    title: "Dune",
    type: "film",
    categories: ["film", "yeni", "trend"],
    year: "2021",
    desc: "Çöl gezegeni Arrakis'te geçen görkemli bir bilim kurgu hikâyesi.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Dune%20%282021%20film%29.jpg"
  },
  
  {
    title: "Joker",
    type: "film",
    categories: ["film", "trend"],
    year: "2019",
    desc: "Arthur Fleck'in karanlık dönüşümünü anlatan psikolojik dram.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Joker%20%282019%20film%29%20poster.jpg"
  },
  {
    title: "Stranger Things",
    type: "dizi",
    categories: ["dizi", "popüler", "trend", "çok izlenen"],
    year: "2016",
    desc: "1980'ler atmosferinde gizem, macera ve doğaüstü olaylar.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Stranger%20Things%20Poster.jpg"
  },
  {
    title: "Breaking Bad",
    type: "dizi",
    categories: ["dizi", "popüler", "çok izlenen"],
    year: "2008",
    desc: "Bir kimya öğretmeninin dönüşüm hikâyesini anlatan efsane dizi.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Breaking%20Bad%20season%20five%20part%20i%20and%20ii%20dvd.png"
  },
  {
    title: "Squid Game",
    type: "dizi",
    categories: ["dizi", "trend", "yeni"],
    year: "2021",
    desc: "Hayatta kalma oyunlarıyla tüm dünyayı etkileyen sürükleyici yapım.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Squid%20Game%20season%203%20poster.png"
  },
  {
    title: "Peaky Blinders",
    type: "dizi",
    categories: ["dizi", "popüler"],
    year: "2013",
    desc: "Suç, aile ve güç mücadelesini anlatan dönem dizisi.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Peaky%20Blinders%20titlecard.jpg"
  },
  
  {
    title: "Sherlock",
    type: "dizi",
    categories: ["dizi", "çok izlenen"],
    year: "2010",
    desc: "Modern Londra'da geçen zeki ve sürükleyici dedektif hikâyeleri.",
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Sherlock%20titlecard.jpg"
  },
   
];

const myList = [];
let selectedFilm = films[1];

const loginScreen = document.getElementById("loginScreen");
const enterSite = document.getElementById("enterSite");
const nameInput = document.getElementById("nameInput");

const navbar = document.getElementById("navbar");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("modal");
const watchModal = document.getElementById("watchModal");
const closeModal = document.getElementById("closeModal");
const closeWatch = document.getElementById("closeWatch");

enterSite.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) document.querySelector(".profile").textContent = name[0].toUpperCase();
  loginScreen.classList.add("hidden");
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") enterSite.click();
});

function createCard(film) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${film.img}" alt="${film.title}">
    <div class="card-info">
      <h4>${film.title}</h4>
      <p>${film.desc}</p>
      <div class="card-buttons">
        <button class="add-btn add-list-btn">+ Listem</button>
        <button class="add-btn detail-btn">Detay</button>
      </div>
    </div>
  `;

  card.querySelector(".detail-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    openModal(film);
  });

  card.querySelector(".add-list-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    addToList(film);
  });

  card.addEventListener("click", () => openModal(film));
  return card;
}

function fillRow(id, list) {
  const element = document.getElementById(id);
  element.innerHTML = "";
  if (list.length === 0) {
    element.innerHTML = `<p class="empty">Bu aramaya uygun içerik bulunamadı.</p>`;
    return;
  }
  list.forEach(item => element.appendChild(createCard(item)));
}

function renderCards(list = films) {
  fillRow("popularCards", list.filter(item => item.categories.includes("popüler")));
  fillRow("trendingCards", list.filter(item => item.categories.includes("trend")));
  fillRow("newCards", list.filter(item => item.categories.includes("yeni")));
  fillRow("topCards", list.filter(item => item.categories.includes("çok izlenen")));
  fillRow("seriesCards", list.filter(item => item.type === "dizi"));
  fillRow("movieCards", list.filter(item => item.type === "film"));
}

function addToList(film) {
  const alreadyAdded = myList.some(item => item.title === film.title);
  if (!alreadyAdded) {
    myList.push(film);
    renderMyList();
  }
}

function renderMyList() {
  const myListCards = document.getElementById("myListCards");
  myListCards.innerHTML = "";

  if (myList.length === 0) {
    myListCards.innerHTML = `<p class="empty">Henüz listene bir şey eklemedin. Kartlardaki + butonuna bas.</p>`;
    return;
  }

  myList.forEach(item => myListCards.appendChild(createCard(item)));
}

function openModal(film) {
  selectedFilm = film;
  document.getElementById("modalImg").src = film.img;
  document.getElementById("modalTitle").textContent = film.title;
  document.getElementById("modalDesc").textContent = film.desc;
  document.getElementById("modalYear").textContent = film.year;
  document.getElementById("modalType").textContent = film.type === "dizi" ? "Dizi" : "Film";
  modal.classList.add("show");
}

function openWatch(film) {
  document.getElementById("watchTitle").textContent = `${film.title} oynatılıyor...`;
  watchModal.classList.add("show");
}

document.getElementById("modalPlay").addEventListener("click", () => openWatch(selectedFilm));
document.getElementById("modalAdd").addEventListener("click", () => addToList(selectedFilm));
document.getElementById("heroPlay").addEventListener("click", () => openWatch(films[1]));
document.getElementById("heroInfo").addEventListener("click", () => openModal(films[1]));

closeModal.addEventListener("click", () => modal.classList.remove("show"));
closeWatch.addEventListener("click", () => watchModal.classList.remove("show"));

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.classList.remove("show");
});

watchModal.addEventListener("click", (event) => {
  if (event.target === watchModal) watchModal.classList.remove("show");
});

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();
  const filtered = films.filter(film =>
    film.title.toLowerCase().includes(value) ||
    film.type.toLowerCase().includes(value)
  );
  renderCards(filtered);
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

renderCards();
renderMyList();