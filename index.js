const http = require('http')
const { v4 } = require('uuid') 
const getBodyData = require('./util.js')
const { title } = require('process')
const { json } = require('stream/consumers')

let books = [
    {
        id: '1',
        title: 'Book n1',
        page: '250',
        auther: 'writer 1'
    }
]

const server =  http.createServer(async (req, res) => {
    // get all books from postmen (postmen is test api)
    if(req.url === '/books' && req.method === 'GET'){
        res.writeHead(200, {
            'Content-Type': 'application/json charset=utf8'
        })
        const resp = {
            status: "ok1",
            books
        }

        res.end(JSON.stringify(resp))
    } else if(req.url === '/books' && req.method === 'POST'){
        const data = await getBodyData(req)
        const {title, page, auther} = JSON.parse(data)
        const newBook ={
            id: v4(),
            title,
            page,
            auther,
        }
        books.push(newBook)
        const resp = {
            status: 'created',
            book : newBook,
        }

         res.writeHead(200, {
            'Content-Type': 'application/json charset=utf8'
        })
        res.end(JSON.stringify(resp))


    }else if (req.url.match(/\/books\/\w+/) && req.method === 'GET'){
       const id = req.url.split('/')[2]
        const book = books.find(b => b.id === id)
         res.writeHead(200, {
            'Content-Type': 'application/json charset=utf8'
        })
        const resp = {
            status: 'ok2',
            book
        }
        res.end(JSON.stringify(resp))
    }else if(req.url.match(/\/books\/\w+/) && req.method === 'PUT'){
         const id = req.url.split('/')[2]
         const data = await getBodyData(req)
        const {title, page, auther} = JSON.parse(data)
        const idx = books.findIndex(b =>b.id ===id)
        const chanchedBook = {
            id: books[idx].id,
            title: title || books[idx].title,
            page: page || books [idx].page,
            auther: auther || books[idx].auther

        }
        books[idx]= chanchedBook
        res.writeHead(200, {
            'Content-Type': 'application/json charset=utf8'
        })
        const resp = {
            status: 'ok2',
            book: chanchedBook
        }
     res.end(JSON.stringify(resp))
    }else if(req.url.match(/\/books\/\w+/) && req.method === 'DELETE'){
         const id = req.url.split('/')[2]
         books = books.filter(b => b.id !== id)
         res.writeHead(200, {
            'Content-Type': 'application/json charset=utf8'
        })
        const resp = {
            status: 'DELETE',
        }
        res.end(JSON.stringify(resp))

    }

})
server.listen(3000,() => console.log('server runing on port: 3000') )

// agar expressda qilinsa mashu hamma codlarni avtomatlashtirib beradi bu faqat node.js di ozida yozilgan 