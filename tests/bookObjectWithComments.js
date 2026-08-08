export function bookComments(array) {
    return array.map(book => ({
            name: book.name,
            author: book.author,
            likes: book.likes,
            liked: book.liked,
            price: book.price,
            publishedYear: book.publishedYear,
            genre: book.genre,
            comments: [
                {
                    names: book.names,
                    comments: book.comments
                }
            ]
    }));
}