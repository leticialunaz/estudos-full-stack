const URL = "https://jsonplaceholder.typicode.com/users"

async function chamarApi(params) {
    const resp = await fetch(URL)
    if(resp.status === 200){
        const users = await resp.json()

        const container = document.createElement('div')

        users.forEach(user => {
            const p = document.createElement('p');
            p.textContent = `Nome: ${user.name}, Email: ${user.email}`
            container.appendChild(p)
        })
        document.body.appendChild(container)
    }
}
chamarApi()

