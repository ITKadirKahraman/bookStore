let initBookCard = document.getElementById('bookCard');
let userName = document.getElementById('userNameComment');

function initBook() {
    getFromLocalStorage();
    renderHeader();
    renderBooks();
}

function renderBooks() {
    initBookCard.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        initBookCard.innerHTML += getCreatedBookCard(indexBook);   
    }
    updateLayout();
}

function toggleLike(index) {
    books[index].liked = !books[index].liked;
    if(books[index].liked){
        books[index].likes++;
    }else {
        books[index].likes--;
    }

    renderBooks();
}

function renderComments(comments) {
    let html = "";

    for (let index = 0; index < comments.length; index++) {
        let comment = comments[index];

        html += `<span class="objectName" id="objectName">[${comment.name}]</span>
                 <span class="objectComment" id="objectComment">${comment.comment}</span>`;
    }

    return html;
}

function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = getHeader();
}

function updateLayout() {
    if(books.length > 3){
        initBookCard.classList.add("gridLayout");
    }
}

function userNameInput() {
    return userName = "Kadir";
}

function addComment(index) {
    const input = document.getElementById(`inputComment-${index}`);
    const text = input.value.trim();

    if(text === "") return;
    
    const newComment = {
        name: "Kadir",
        comment: text
    };

    books[index].comments.push(newComment);
    saveToLocalStorage();
    input.value = "";

    renderBooks();
}

function saveToLocalStorage() {
    localStorage.setItem("comment", JSON.stringify(books));
}

function getFromLocalStorage() {
    const comment = localStorage.getItem("comment");
    if(comment){
        books = JSON.parse(comment);
        renderBooks();
    }
}