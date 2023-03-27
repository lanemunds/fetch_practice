function fetchData(){
fetch('https://reqres.in/api/users').then(response =>{
    return response.json()
}).then(data =>{
    const html = data.data.map(user=>{
        return `<div class = "user">
        <p>Name: ${user.first_name} ${user.last_name} </p>
        <p>Email: ${user.email}
        <p><img src"${user.avatar}" alt="${user.first_name}"/></p>
        </div>`
    }).join('')
    document.querySelector('#app').insertAdjacentHTML('afterbegin',html)

}).catch(error=>{
    console.log(error)
})

}
fetchData()

function fetchStar(){
    d=[]
    fetch('https://swapi.dev/api/planets/1').then(response=>{
        return response.json()
    }).then(data=>{
     let html = `<div>
        <p>Name:${data.name}</p>
        <p>Climate:${data.climate}</p>
     </div>`
     document.querySelector('#starwars').insertAdjacentHTML('afterbegin',html)
     
     document.querySelector('#starwars').insertAdjacentHTML('beforebegin','<h1>Residents</h1>')
     for(let i = 0;i < data.residents.length; i++){
         fetch(data.residents[i]).then(response=>{
             return response.json()
            }).then(data=>{
                let html1 = `
                <div>
                <p>
                ${data.name}
                </p>
                </div>
                `
                document.querySelector('#starwars').insertAdjacentHTML('afterbegin',html1)
                
            })
        }
    })
    

}

fetchStar()


function fetchStar1(){
    fetch('https://swapi.dev/api/planets/2').then(response=>{
        return response.json()
    }).then(data=>{
        let html = `<div>
        <p>${data.name}</p>
        </div>`
        document.querySelector('#starwars').insertAdjacentHTML('beforeend',html)
    })
}

fetchStar1()


function writeHello(){
    word = `<div>
    <p>Hello</p>
    </div>`
    document.querySelector('#hello').insertAdjacentHTML('beforebegin', word)
}

writeHello()

function writeSomething(sentence){

    sent=`<div>
    ${sentence}
    </div>`
document.querySelector('#tricks').insertAdjacentHTML('beforebegin',sent)
}

writeSomething('tricks are for kids')