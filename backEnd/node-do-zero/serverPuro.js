import { createServer } from 'node:http'

const server = createServer((request, response) => {
    console.log('oi')

    response.write('que pena que deu errado!!')

    return response.end()
    
})

server.listen(4444)