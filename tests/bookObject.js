export function book(array) {
    return array.map(book => ({
            name: book.name,
            author: book.author,
            likes: book.likes,
            liked: book.liked,
            price: book.price,
            publishedYear: book.publishedYear,
            genre: book.genre,
            comments: []
    }));
}