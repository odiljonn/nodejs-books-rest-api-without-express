# Node.js Books REST API

Simple REST API built with **Node.js native `http` module**, without using Express.

This project was created to understand how REST API works internally in Node.js before using Express.

## What I practiced

* Node.js `http` module
* `http.createServer()`
* HTTP methods: GET, POST, PUT, DELETE
* Request and response handling
* URL and route handling
* Reading request body
* JSON parsing with `JSON.parse()`
* Sending JSON with `JSON.stringify()`
* CRUD operations
* `EventEmitter` / asynchronous concepts
* UUID generation with `uuid`
* Basic REST API structure

## API Routes

### GET `/books`

Get all books.

### POST `/books`

Create a new book.

Example body:

```json
{
  "title": "Book 2",
  "page": "300",
  "auther": "Writer 2"
}
```

### GET `/books/:id`

Get one book by ID.

### PUT `/books/:id`

Update a book.

### DELETE `/books/:id`

Delete a book.

## Important

This API stores books only in memory:

```js
let books = []
```

So when the server restarts, the added books disappear.

## Why I built this

I built this project to understand how a REST API works **without Express**.

Express can simplify and automate many of these tasks, but this project helped me understand what happens underneath.

**Node.js native HTTP → understand the fundamentals → Express → build APIs faster.**
