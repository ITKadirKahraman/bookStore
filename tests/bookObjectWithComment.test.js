import test from "node:test";
import assert from "node:assert/strict";
import {bookComments} from "./bookObjectWithComments.js";

test.only("test object with comment", () => {
    const array = [
        {
            name: "Die Geheimnisse des Ozeans",
            author: "Clara Meer",
            likes: 1250,
            liked: false,
            price: 19.99,
            publishedYear: 2018,
            genre: "Fantasy",
            comments: [
                {
                    names: "Leser123",
                    comments: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
                }
            ]
        }
    ]
    assert.deepStrictEqual(bookComments(array), [{
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        likes: 1250,
        liked: false,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                names: "Leser123",
                comments: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    }]);
});