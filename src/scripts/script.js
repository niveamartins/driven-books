let listOfBooks = [];

function closeButtons(classToClose) {
  if (classToClose === "books-list") {
    const bookList = document.querySelector(".books-list");
    bookList.classList.remove("show");
    bookList.classList.add("hidden");
  } else {
      closeBookInformation()
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
}

function makeList() {
  const showinBooks = document.querySelector(".listed-books");
  for (let book in listOfBooks) {
    showinBooks.innerHTML += "<p>" + listOfBooks[book] + "<p>";
  }
}

function addToList() {
  const bookString = getBookToList();
  if (!checkIfBookAlreadyListed(bookString)) {
    listOfBooks.push(bookString);
  }
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
    const book = findBookInformation(bookImg)

    document.querySelector(".book-title").innerText = book.title
    document.querySelector(".book-author").innerText = book.author
    document.querySelector(".book-details").innerText = book.description
}

function selectBook(book) {
    if (document.querySelector(".selected") !== null) {
        document.querySelector(".selected").classList.remove("selected")
    }
    book.classList.add("selected")
    const bookImg = book.querySelector(".book-img") 
    showBookInformation(bookImg.src)

    const booksExhibition = document.querySelector(".books")
    booksExhibition.classList.remove("books-without-selection")
    booksExhibition.classList.add("books-with-selection")

    const bookBox = document.querySelector(".book-box")
    bookBox.classList.remove("hidden")

}

function closeBookInformation() {
    const booksExhibition = document.querySelector(".books")
    booksExhibition.classList.remove("books-with-selection")
    booksExhibition.classList.add("books-without-selection")

    const bookBox = document.querySelector(".book-box")
    bookBox.classList.add("hidden")
}

function findBookInformation(bookImg) {
    bookImg = bookImg.replace("http://127.0.0.1:5500", ".")
    for (let bookIndex in booksInformation) {
        if (booksInformation[bookIndex].img === bookImg){
            return booksInformation[bookIndex]
        }
    }
    return false
}



const booksInformation = [
    {
      img: "./assets/img/a-garota-que-nao-se-calou.jpg",  
      title: "A garota que Não Se Calou",
      author: "Abi Daré",
      description:
        "Esta é a história inesquecível de uma menina que deseja estudar para poder encontrar sua voz e falar por si mesma. A garota que não se calou é uma narrativa comovente e triunfante sobre o poder de lutar pelos seus sonhos.",
    },
    {
        img: "./assets/img/casamento-americano.jpg",
        title: "Um Casamento Americano",
        author: "Tayari Jones",
        description: "Os recém-casados Celestial e Roy são a personificação do sonho americano e do empoderamento negro. Mas um dia os dois são separados por circunstâncias imprevisíveis: Roy é condenado a doze anos de prisão por um crime que Celestial sabe que ele não cometeu."
    },
    {   
        img: "./assets/img/fique-comigo.jpg",
        title: "Fique Comigo",
        author: "Ayòbámi Adébáyò",
        description: "Yejide está casada há quatro anos com Akin, mas ainda não engravidou. A família do marido espera avidamente por uma criança, uma vez que a tradição local está bastante ligada à continuidade da linhagem familiar. Por isso, eles pressionam Akin a aceitar uma nova esposa, embora ele e Yejide tenham concordado em serem monogâmicos."
    },
    {   
        img: "./assets/img/minha-pele.jpg",
        title: "Minha Pele",
        author: "Lázaro Ramos",
        description: "Movido pelo desejo de viver num mundo em que a pluralidade cultural, racial, étnica e social seja vista como um valor positivo, e não uma ameaça, Lázaro Ramos divide com o leitor suas reflexões sobre temas como ações afirmativas, gênero, família, empoderamento, afetividade e discriminação."
    },
    {   
        img: "./assets/img/nascido-crime.jpg",
        title: "Nascido do Crime",
        author: "Trevor Noah",
        description: "A jornada extraordinária de Trevor Noah ― da infância sob o apartheid, na África do Sul, à bancada de um dos mais importantes talk shows dos Estados Unidos ― começou com um ato criminoso: seu nascimento."
    },
    {   
        img: "./assets/img/vermelho-branco-sangue-azul.jpg",
        title: "Vermelho, Branco e Sangue Azul",
        author: "Casey McQuiston",
        description: "O que pode acontecer quando o filho da presidenta dos Estados Unidos se apaixona pelo príncipe da Inglaterra?"
    }
  ];