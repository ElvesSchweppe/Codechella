
document.body.onload = preencheIngresso

function preencheIngresso() {

    const recebe_nome = document.getElementById("ing_nome")
    recebe_nome.innerHTML = sessionStorage['ing_nome']
    
    const recebe_tipo = document.getElementById("ing_tipo")
    recebe_tipo.innerHTML = sessionStorage['ing_tipo']
    
    const recebe_setor = document.getElementById("ing_setor")
    recebe_setor.innerHTML = sessionStorage['ing_setor']
    
    const recebe_data = document.getElementById("ing_data")
    recebe_data.innerHTML = sessionStorage['ing_data']
    
    const recebe_local = document.getElementById("ing_local")
    recebe_local.innerHTML = sessionStorage['ing_local']
}

