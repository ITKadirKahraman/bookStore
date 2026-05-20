function getHeader() {
    return `
    <header class="header">
        <ul class="ulHeader">
            <li><h1>BookStore</h1></li>
            <li><img src="assets/logo/headerLogo.svg" alt="Logo"></li>
        </ul>
    </header>`;
}

function getCreatedBookCard(index) {
    return `
    <dialog class="bookCard">
        <header class="bookHeader">
            <h2>${books[index].name}</h2>
        </header>

        <div class="separator"></div>

        <figure>
            <img src="./assets/logo/headerLogo.svg" alt="Abbild vom Buch">
        </figure>

        <div class="separator"></div>

        <section>
            <nav>
                <ul>
                    <li><p class="price" id="price">${books[index].price} €</p></li>
                    <li><span class="likes" id="likes">${books[index].likes}</span></li>
                    <li>
                        <button class="btnSend" id="btnSend" onclick="toggleLike(${index})">
                            <img id="heart" src="./assets/icons/${books[index].liked ? 'fullHeart' : 'heart'}.svg" alt="Herz">
                        </button>
                    </li>
                </ul>
            </nav>
            <article class="articleBooksInfo">
                <span class="booksInfo" id="author"><strong>Author</strong> : ${books[index].author}</span>
                <span class="booksInfo" id="published"><strong>Erscheingsjahr</strong> : ${books[index].publishedYear}</span>
                <span class="booksInfo" id="genre"><strong>Genre</strong> : ${books[index].genre}</span>
            </article>
        </section>    
        
        <div class="separator"></div>

        <section>
            <h3>Kommentare:</h3>
            <div class="commentSection">
                <article class="commentShow">
                    <span class="userNameComment" id="userNameComment">[${userNameInput()}]</span>
                    <p class="outputComment" id="outputComment">Test für Hardcoded.</p>
                </article>
                <article class="comments">
                   ${renderComments(books[index].comments)}
                </article>
            </div>
        </section>

        <nav class="navBottom">
            <input class="inputComment" type="text" id="inputComment-${index}" placeholder="Schreibe dein Kommentar ...">
            <button class="btnSend" id="btnSend" onclick="addComment(${index})">
                <img src="./assets/icons/send.svg" alt="Kommentar versenden">
            </button>
        </nav>
    </dialog>`;
}