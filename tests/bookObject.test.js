import test from "node:test";
import assert from "node:assert/strict";
import {book} from "./bookObject.js";

test.only("test object book without comments", () => {
    const array = [
        {
            name: "Die Geheimnisse des Ozeans",
            author: "Clara Meer",
            likes: 1250,
            liked: false,
            price: 19.99,
            publishedYear: 2018,
            genre: "Fantasy",
            comments: []
        }
    ]
    assert.deepStrictEqual(book(array), [{
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        likes: 1250,
        liked: false,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: []
    }]);
});