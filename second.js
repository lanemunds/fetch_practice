function getData(){
fetch('https://swapi.dev/api/planets/1').then(response=>{
    return response.json()
}).then(data=>{
    for(let i = 0; i < data.residents.length; i++){
        fetch(data.residents[i]).then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
            html = `<div class = "resCard">
            <p>
            Name: ${data.name}
            </p>
            <p>
            Mass: ${data.mass}
            </p>
            <p>
            Height: ${data.height}
            </p>
            <button>Delete</button>
            </div>`
            document.querySelector('#residents').insertAdjacentHTML('afterbegin',html)
        })
    }
})
}

getData()