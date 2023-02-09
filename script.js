let library = [
  {
    title : "Diary of a Wimpy Kid: Rodrick Rules",
    author : "Jeff Kinney",
    score : "8",
    status : "Read"
  },
  {
    title : "Yukon Ho!: A Calvin and Hobbes Collection",
    author : "Bill Watterson",
    score : "10",
    status : "Read"
  },
  {
    title : "If You Give a Mouse a Cookie",
    author : "Laura Numeroff",
    score : "6",
    status : "Paused"
  },
  {
    title : "The Hobbit",
    author : "J. R. R. Tolkien",
    score : "10",
    status : "Rereading"
  },
  {
    title : "Nineteen Eighty-Four",
    author : "George Orwell",
    score : "7",
    status : "Plan to Read"
  },
];
const bookList = document.querySelector(".book-list");
function renderData(array) {
  let counter = 0;
  for(let data of array) {
    let entry = document.createElement("div");
    entry.className = "entry";
    entry.id = counter;
    counter++;
    let entryTitle = document.createElement("div");
    entryTitle.className = "title";
    entryTitle.innerText = data.title;
    let entryAuthor = document.createElement("div");
    entryAuthor.className = "author";
    entryAuthor.innerText = data.author;
    let entryScore = document.createElement("div");
    entryScore.className = "score";
    entryScore.innerText = data.score;
    let entryStatus = document.createElement("div");
    entryStatus.className = "status";
    entryStatus.innerText = data.status;
    let entryRemove = document.createElement("img");
    entryRemove.className = "remove";
    entryRemove.src = "./images/trash.svg"
    bookList.appendChild(entry);
    entry.appendChild(entryTitle);
    entry.appendChild(entryAuthor);
    entry.appendChild(entryScore);
    entry.appendChild(entryStatus);
    entry.appendChild(entryRemove);
  }
}
renderData(library);

const modal = document.querySelector(".modal");
const create = document.querySelector(".create");
const closeButton = document.querySelector(".close");
const removeEntry = document.querySelectorAll(".remove");

create.addEventListener("click", e => {
  modal.style.display = "block";
});
closeButton.addEventListener("click", e => {
  modal.style.display = "none";
});


let submit = () => {
  let userEntry = {
    title: document.querySelector(".title-input").value,
    author: document.querySelector(".author-input").value,
    score: document.querySelector(".score-input").value,
    status: document.querySelector(".status-input").value,
  }
  library.unshift(userEntry);
  empty(bookList);
  renderData(library);
};


function empty(element) {
  while(element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

function filter(array, type) {
  let temp = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].status.trim().split(' ')[0].toLowerCase() === type) {
      temp.push(array[i]);
    }
  }
  return temp;
}

function listenClicks() {
  document.addEventListener("click", e => {
    if(e.target.className === "remove") {
      library.splice(e.target.parentNode.id, 1);
      empty(bookList);
      renderData(library);
    } else if(e.target.parentNode.className === "filter") {
      if(e.target.className === "all") {
        empty(bookList);
        renderData(library);
      } else {
        empty(bookList);
        renderData(filter(library, e.target.className));
      }
    }
  })
}
console.log()
listenClicks()