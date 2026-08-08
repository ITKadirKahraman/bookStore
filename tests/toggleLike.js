export function toggleLike(index) {
    books[index].liked = !books[index].liked;
    if(books[index].liked){
        books[index].likes++;
    }else {
        books[index].likes--;
    }
}