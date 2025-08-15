//sem utilizar framework

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     console.log('oi')

//     response.write('que pena que deu errado!!')

//     return response.end()
    
// })

// server.listen(3333)


//com fastify
import { readFileSync } from 'fs'

import { join } from 'path'

import { fastify } from "fastify"

const server = fastify()

server.get('/', () => {
    return 'Hello world'
})

server.get('/atual', () => {
    return 'Hello pessoa x'
})

server.get('/html', (request, response) => {
    response.type('text/html')
    response.send(`
        <html>
            <head>
                <title>leticias page;p</title>
            </head>
            <body>
                <h1>Deu tudo certo! :) </h1>
            </body>
        </html>
    `)   

})


const cardsHtml = readFileSync(join(process.cwd(), '../estudosFrontEnd/playingCards/cards.html'), 'utf-8')

server.get('/html2', (request, response) => {
    response.type('text/html')
    response.send(cardsHtml)   

})


server.listen({
    port: 3333,
})
