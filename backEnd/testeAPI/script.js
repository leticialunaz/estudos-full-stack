const URL = "https://jsonplaceholder.typicode.com/users"

async function chamarApi(params) {

    // faz o pedido para a api
    const resp = await fetch(URL)
    if(resp.status === 200){
        // array de usuários
        const users = await resp.json()

        // cria um elemento <div> na memória e agrupa todos os usuários
        const container = document.createElement('div')

        users.forEach(user => {
            //cada elemento p é um usuário
            const p = document.createElement('p');

            // define o que cada usuário vai mostrar
            p.textContent = `Nome: ${user.name}, Email: ${user.email}`

            //adiciona o p dentro do container
            container.appendChild(p)
        })

        // coloca todos os p dentro do body do html
        document.body.appendChild(container)
    }
}



async function criarUsuario(params) {
    const resp = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Letícia", email: "leticia@gmail.com"})    
    })

    const data = await resp.json()

    console.log("POST:", data)
}



async function atualizaUsuario(id) {
    const resp = await fetch(`${URL}/${id}`, {
        method: "PUT",
        // informa o tipo de conteudo e permite que o servidor entenda os dados
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email: "leticia@yahoo.com"})    

    })

    
    const data = await resp.json()

    console.log("PUT: ", data)
}


async function deletaUsuario(id){
    const resp = await fetch(`${URL}/${id}`, {
        method: "DELETE",
        // informa o tipo de conteudo e permite que o servidor entenda os dados
        headers: { "Content-Type": "application/json" }
    })

    if (resp.status == 200) {
        console.log(`Usuário ${id} deletado com sucesso.`)
    } else {
        console.error(`Erro ao deletar usuário ${id}: ${resp.status}`)        
    }
}


criarUsuario().then(() => atualizaUsuario(1)).then(() =>deletaUsuario(3)).then(() => chamarApi())
