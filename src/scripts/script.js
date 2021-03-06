let listOfBooks = [];

function closeButtons(classToClose) {
  if (classToClose === "books-list") {
    const bookList = document.querySelector(".books-list");
    bookList.classList.remove("show");
    bookList.classList.add("hidden");
  } else {
    closeBookInformation();
  }
}

function openList() {
  const bookList = document.querySelector(".books-list");
  makeList();
  bookList.classList.remove("hidden");
  bookList.classList.add("show");
}

function clearList() {
  listOfBooks = [];
  const showinBooks = document.querySelector(".listed-books");
  showinBooks.innerHTML = "";

  const listButton = document.querySelector(".list-button");
  listButton.disabled = true;
  listButton.classList.add("disabled");

  const bookList = document.querySelector(".books-list");
  bookList.classList.remove("show");
  bookList.classList.add("hidden");
}

function makeList() {
  const showinBooks = document.querySelector(".listed-books");
  showinBooks.innerHTML = ""
  for (let book in listOfBooks) {
    showinBooks.innerHTML += "<p>" + listOfBooks[book] + "<p>";
  }
}

function addToList() {
  const bookString = getBookToList();
  if (!checkIfBookAlreadyListed(bookString)) {
    listOfBooks.push(bookString);
  }
  const listButton = document.querySelector(".list-button");
  listButton.disabled = false;
  listButton.classList.remove("disabled");
}

function getBookToList() {
  const bookName = document.querySelector(".book-title");
  const bookAuthor = document.querySelector(".book-author");
  return bookName.innerText + ", " + bookAuthor.innerText + ";";
}

function checkIfBookAlreadyListed(book) {
  for (let bookIndex in listOfBooks) {
    if (listOfBooks[bookIndex] === book) {
      return true;
    }
  }
  return false;
}

function showBookInformation(bookImg) {
  const book = findBookInformation(bookImg);

  document.querySelector(".book-title").innerText = book.title;
  document.querySelector(".book-author").innerText = book.author;
  document.querySelector(".book-details").innerText = book.description;
}

function selectBook(book) {
  if (document.querySelector(".selected") !== null) {
    document.querySelector(".selected").classList.remove("selected");
  }
  book.classList.add("selected");
  const bookImg = book.querySelector(".book-img");
  showBookInformation(bookImg.src);

  const booksExhibition = document.querySelector(".books");
  booksExhibition.classList.remove("books-without-selection");
  booksExhibition.classList.add("books-with-selection");

  const bookBox = document.querySelector(".book-box");
  bookBox.classList.remove("hidden");
}

function closeBookInformation() {
  document.querySelector(".selected").classList.remove("selected");

  const booksExhibition = document.querySelector(".books");
  booksExhibition.classList.remove("books-with-selection");
  booksExhibition.classList.add("books-without-selection");

  const bookBox = document.querySelector(".book-box");
  bookBox.classList.add("hidden");
}

function findBookInformation(bookImg) {
  bookImg = bookImg.replace("http://127.0.0.1:5500", ".");
  for (let bookIndex in booksInformation) {
    if (booksInformation[bookIndex].img === bookImg) {
      return booksInformation[bookIndex];
    }
  }
  return false;
}

const booksInformation = [
  {
    img: "./assets/img/a-garota-que-nao-se-calou.jpg",
    title: "A garota que N??o Se Calou",
    author: "Abi Dar??",
    description:
      "Esta ?? a hist??ria inesquec??vel de uma menina que deseja estudar para poder encontrar sua voz e falar por si mesma. A garota que n??o se calou ?? uma narrativa comovente e triunfante sobre o poder de lutar pelos seus sonhos.",
  },
  {
    img: "./assets/img/casamento-americano.jpg",
    title: "Um Casamento Americano",
    author: "Tayari Jones",
    description:
      "Os rec??m-casados Celestial e Roy s??o a personifica????o do sonho americano e do empoderamento negro. Mas um dia os dois s??o separados por circunst??ncias imprevis??veis: Roy ?? condenado a doze anos de pris??o por um crime que Celestial sabe que ele n??o cometeu.",
  },
  {
    img: "./assets/img/fique-comigo.jpg",
    title: "Fique Comigo",
    author: "Ay??b??mi Ad??b??y??",
    description:
      "Yejide est?? casada h?? quatro anos com Akin, mas ainda n??o engravidou. A fam??lia do marido espera avidamente por uma crian??a, uma vez que a tradi????o local est?? bastante ligada ?? continuidade da linhagem familiar. Por isso, eles pressionam Akin a aceitar uma nova esposa, embora ele e Yejide tenham concordado em serem monog??micos.",
  },
  {
    img: "./assets/img/minha-pele.jpg",
    title: "Minha Pele",
    author: "L??zaro Ramos",
    description:
      "Movido pelo desejo de viver num mundo em que a pluralidade cultural, racial, ??tnica e social seja vista como um valor positivo, e n??o uma amea??a, L??zaro Ramos divide com o leitor suas reflex??es sobre temas como a????es afirmativas, g??nero, fam??lia, empoderamento, afetividade e discrimina????o.",
  },
  {
    img: "./assets/img/nascido-crime.jpg",
    title: "Nascido do Crime",
    author: "Trevor Noah",
    description:
      "A jornada extraordin??ria de Trevor Noah ??? da inf??ncia sob o apartheid, na ??frica do Sul, ?? bancada de um dos mais importantes talk shows dos Estados Unidos ??? come??ou com um ato criminoso: seu nascimento.",
  },
  {
    img: "./assets/img/vermelho-branco-sangue-azul.jpg",
    title: "Vermelho, Branco e Sangue Azul",
    author: "Casey McQuiston",
    description:
      "O que pode acontecer quando o filho da presidenta dos Estados Unidos se apaixona pelo pr??ncipe da Inglaterra?",
  },
];
