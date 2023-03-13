
document.body.onload = preencheIngresso

function preencheIngresso() {

    const ingresso = JSON.parse(sessionStorage.getItem('ingresso'))

    const recebe_nome = document.getElementById("ing_nome")
    recebe_nome.innerHTML = ingresso['ing_nome']
    
    const recebe_tipo = document.getElementById("ing_tipo")
    recebe_tipo.innerHTML = ingresso['ing_tipo']
    
    const recebe_setor = document.getElementById("ing_setor")
    recebe_setor.innerHTML = ingresso['ing_setor']
    
    const recebe_data = document.getElementById("ing_data")
    recebe_data.innerHTML = ingresso['ing_data']
    
    const recebe_local = document.getElementById("ing_local")
    recebe_local.innerHTML = ingresso['ing_local']
}

