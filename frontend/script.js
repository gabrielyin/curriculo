let wasClicked = false;
function openMenu() {
    if (!wasClicked) {
        document.getElementById("caixaSome").style.display = "block";
        wasClicked = true;
    } else {
        document.getElementById("caixaSome").style.display = "none";
        wasClicked = false;
    }
}

function dadosGet() {
    var url = "https://curriculogabrielyin.herokuapp.com/dados";

    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", url, false);
    // xhttp.send();
    
    // let info = xhttp.responseText;
    // // let info = '{"result":true, "count":42}';
    // // var infoParsed = JSON.parse(info);
    // alert(info);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(dado => {
            const idade = `<li>` + dado.idade + `</li>`
            const telefone = `<li>` + dado.telefone + `</li>`
            const localnascimento = `<li>` + dado.localnascimento + `</li>`
            const localatual = `<li>` + dado.localatual + `</li>`
            document.getElementById('display').innerHTML += idade;
            document.getElementById('display').innerHTML += telefone;
            document.getElementById('display').innerHTML += localnascimento;
            document.getElementById('display').innerHTML += localatual;
        })
    })
    .catch(err => console.log(err))
}

function enviar() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    
    fetch('https://curriculogabrielyin.herokuapp.com/contato', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone
        })
    }).then(res => {
        return res.json()
    })
}