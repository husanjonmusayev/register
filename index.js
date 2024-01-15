let creat = document.querySelector(".container")

function creatRow(phon) {
    return `
     <div class="card">
        <img src="./img/phon.webp" alt="pic">
     <div class="about">
            <h4>${phon.name}</h4>
            <h4>${phon.price}$</h4>
    </div>
     <div class="desc">
            <p>${phon.description}</p>
    </div>
        <button id="btn_${phon.id}">Batafsil</button>
    </div>
        `
}

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET"
    })

        .then(response => response.json())
        .then(data => {
            if (data.length) {
                data.forEach(phon => {
                    let card = creatRow(phon)
                    creat.innerHTML += card
                })
            }
        })

        .catch(err => { console.log(err); })


})

