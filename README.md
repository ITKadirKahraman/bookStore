<div align="center">

# 📚 BookStore

### Eine interaktive BookStore-Webanwendung mit JavaScript

<img src="./assets/logo/bookStoreCover.svg" alt="BookStore Cover" width="180">

<br>

**Version 1.0.0**

Eine moderne BookStore-Oberfläche zur Darstellung von Büchern mit Likes, Kommentaren und lokaler Datenspeicherung.

</div>

---

## 📖 Über das Projekt

**BookStore** ist ein Frontend-Projekt, das mit **HTML, CSS und JavaScript** entwickelt wurde.

Die Anwendung stellt verschiedene Bücher in übersichtlichen Book-Cards dar. Zu jedem Buch werden Informationen wie Titel, Autor, Preis, Erscheinungsjahr, Genre und die Anzahl der Likes angezeigt.

Zusätzlich können Benutzer:

- ❤️ Bücher liken und entliken
- 💬 Kommentare zu Büchern hinzufügen
- 💾 Daten im `localStorage` speichern
- 📚 mehrere Bücher übersichtlich anzeigen
- 🔄 gespeicherte Daten beim erneuten Laden wiederherstellen

Das Projekt wurde mit Fokus auf **JavaScript, DOM-Manipulation, Arrays, Objekte, Module und Unit-Tests** entwickelt.

---

## ✨ Features

### 📚 Bücherübersicht

Alle Bücher werden dynamisch aus einem JavaScript-Array erzeugt und auf der Webseite dargestellt.

Angezeigt werden:

- Buchtitel
- Autor
- Preis
- Erscheinungsjahr
- Genre
- Likes
- Kommentare

---

### ❤️ Like-System

Jedes Buch verfügt über einen Like-Button.

Beim Anklicken:

- wird der Like-Status geändert
- erhöht oder verringert sich die Like-Anzahl
- ändert sich das Herz-Icon

Beispiel:

```javascript
function toggleLike(index) {
    books[index].liked = !books[index].liked;

    if (books[index].liked) {
        books[index].likes++;
    } else {
        books[index].likes--;
    }

    renderBooks();
}
```

---

### 💬 Kommentarfunktion

Benutzer können direkt bei einem Buch Kommentare hinzufügen.

Ein Kommentar besteht aus:

```javascript
{
    name: "Kadir",
    comment: "Sehr interessantes Buch!"
}
```

Der Kommentar wird anschließend direkt in der jeweiligen Book-Card angezeigt.

---

### 💾 LocalStorage

Die Buchdaten werden im Browser gespeichert.

Zum Speichern wird verwendet:

```javascript
localStorage.setItem("comment", JSON.stringify(books));
```

Beim erneuten Öffnen der Webseite können die gespeicherten Daten wieder geladen werden:

```javascript
const comment = localStorage.getItem("comment");

if (comment) {
    books = JSON.parse(comment);
}
```

Dadurch bleiben beispielsweise Kommentare und Like-Zustände auch nach einem Reload erhalten.

---

## 🛠️ Verwendete Technologien

| Technologie | Verwendung |
|---|---|
| HTML5 | Aufbau der Webseite |
| CSS3 | Design und Layout |
| JavaScript | Programmierung und Interaktionen |
| ES6 Modules | Aufteilung von Funktionen |
| LocalStorage | Lokale Datenspeicherung |
| JSON | Strukturierung der Buchdaten |
| Node.js | Ausführung der Tests |
| Node Test Runner | Unit-Tests |

---

## 📂 Projektstruktur

```text
BookStore/
│
├── assets/
│   ├── icons/
│   │   ├── heart.svg
│   │   ├── fullHeart.svg
│   │   └── send.svg
│   │
│   └── logo/
│       ├── headerLogo.svg
│       └── logo.svg
│
├── scripts/
│   ├── templates.js
│   ├── objectBooks.js
│   ├── bookObject.js
│   ├── bookObjectWithComments.js
│   └── ...
│
├── styles/
│   ├── root.css
│   └── standard.css
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> Die genaue Struktur kann je nach Entwicklungsstand des Projekts variieren.

---

## 🧩 Datenmodell

Ein Buch wird als JavaScript-Objekt gespeichert:

```javascript
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
            name: "Leser123",
            comment: "Ein faszinierendes Abenteuerbuch."
        }
    ]
}
```

### Eigenschaften

| Property | Beschreibung |
|---|---|
| `name` | Titel des Buches |
| `author` | Autor des Buches |
| `likes` | Anzahl der Likes |
| `liked` | Like-Status |
| `price` | Preis des Buches |
| `publishedYear` | Erscheinungsjahr |
| `genre` | Genre des Buches |
| `comments` | Liste der Kommentare |

---

## ⚙️ Funktionsweise

Beim Laden der Webseite wird `initBook()` ausgeführt:

```javascript
function initBook() {
    getFromLocalStorage();
    renderHeader();
    renderBooks();
}
```

Dabei werden:

1. gespeicherte Daten aus dem LocalStorage geladen
2. der Header erstellt
3. die Bücher dynamisch gerendert

---

## 🏗️ Dynamisches Rendering

Die Book-Cards werden nicht statisch im HTML hinterlegt.

Stattdessen werden sie mit JavaScript erzeugt:

```javascript
function renderBooks() {
    initBookCard.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        initBookCard.innerHTML += getCreatedBookCard(indexBook);
    }

    updateLayout();
}
```

Dadurch können beliebig viele Bücher aus dem Daten-Array dargestellt werden.

---

## 💬 Kommentare hinzufügen

Neue Kommentare werden mit `addComment()` erstellt:

```javascript
function addComment(index) {
    const input = document.getElementById(`inputComment-${index}`);
    const text = input.value.trim();

    if (text === "") return;

    const newComment = {
        name: "Kadir",
        comment: text
    };

    books[index].comments.push(newComment);

    saveToLocalStorage();

    input.value = "";

    renderBooks();
}
```

Der Ablauf:

```text
Benutzer schreibt Kommentar
          ↓
Eingabe wird überprüft
          ↓
Kommentar wird als Objekt erstellt
          ↓
Kommentar wird dem Buch hinzugefügt
          ↓
Daten werden gespeichert
          ↓
Book-Cards werden neu gerendert
```

---

## 🧪 Unit-Tests

Für die Datenverarbeitung wurden Unit-Tests mit Node.js erstellt.

Beispiel:

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import { book } from "./bookObject.js";

test("test object book without comments", () => {
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
    ];

    assert.deepStrictEqual(book(array), array);
});
```

### Tests ausführen

Wenn Node.js installiert ist:

```bash
node --test
```

---

## 🚀 Projekt starten

### 1. Projekt öffnen

Öffne den BookStore-Projektordner in **Visual Studio Code**.

### 2. `index.html` starten

Die Webseite kann direkt über `index.html` geöffnet werden.

Empfohlen wird die Verwendung der VS-Code-Erweiterung:

```text
Live Server
```

### 3. Anwendung verwenden

Nach dem Start können Bücher:

- angesehen
- gelikt
- entlikt
- kommentiert

werden.

---

## 🎨 Design

Der BookStore verwendet ein modernes Card-Layout.

Wichtige Bestandteile:

- 📚 Book-Cards
- ❤️ Like-System
- 💬 Kommentarbereich
- 🔄 dynamisches Rendering
- 📱 flexibles Layout
- 🎨 violette Akzentfarben
- 🖼️ eigenes BookStore-Logo

---

## 🧠 Lernziele

Mit diesem Projekt wurden folgende Kenntnisse angewendet:

- JavaScript DOM-Manipulation
- Arrays
- Objekte
- Funktionen
- Parameter
- Template Literals
- ES6 Modules
- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- dynamisches HTML
- Event Handling
- CSS Flexbox
- CSS Grid
- Unit-Testing
- Node.js Test Runner

---

## 🔧 Geplante Erweiterungen

Für zukünftige Versionen sind folgende Features geplant:

- [ ] 🔍 Bücher suchen
- [ ] 🏷️ Nach Genre filtern
- [ ] ↕️ Bücher sortieren
- [ ] ⭐ Bewertungssystem
- [ ] 📖 Detailansicht für Bücher
- [ ] 🛒 Warenkorb
- [ ] 💳 Bestellfunktion
- [ ] 👤 Benutzerprofile
- [ ] 🔐 Login-System
- [ ] 🗄️ Datenbank
- [ ] 🌐 Backend/API
- [ ] 📱 Optimierung für Mobile Devices

---

## 📌 Version

### BookStore v1.0.0

**Status:** 🟢 In Entwicklung / Lernprojekt

---

## 👨‍💻 Autor

**Kadir Kahraman**

---

<div align="center">

# 📚 BookStore

### Read. Like. Comment.

**Version 1.0.0**

</div>