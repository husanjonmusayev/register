let type = document.getElementById('type')
let narhi = document.getElementById('narhi')
let stet = document.getElementById('status')
let comment = document.getElementById('comment')
let catigory = document.getElementById('catigory')
let btn = document.getElementById('btn')


function validate() {
    if (!type.value) {
        type.focus()
        alert('type validatsiadan otmadi')
        return false
    }
    if (!narhi.value) {
        narhi.focus()
        alert('narhi validatsiadan otmadi')
        return false
    }

    if (!catigory.value) {
        catigory.focus()
        alert('catigory validatsiadan otmadi')
        return false
    }

    if (!stet.value) {
        stet.focus()
        alert('status validatsiadan otmadi')
        return false
    }

    if (!comment.value) {
        comment.focus()
        alert('comment validatsiadan otmadi')
        return false
    }



    return true
}

function clear() {
    type.value = ''
    narhi.value = ''
    comment.value = ''
    catigory.value = ''
}


btn && btn.addEventListener('click', function () {
    if (validate()) {

        let phon = {
            name: type.value,
            description: comment.value,
            status: stet.value,
            price: narhi.value,
            category_id: catigory.value
        }


        fetch('https://auth-rg69.onrender.com/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(phon)
        })
    }
    clear()


})





