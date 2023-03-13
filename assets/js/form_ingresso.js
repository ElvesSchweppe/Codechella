const botao = document.getElementById("ficha_formulario");

botao.addEventListener ("submit", (evento) => {
    evento.preventDefault();
    
    const nome_ok = evento.target.elements["form__nome"].value;
    const email_ok = evento.target.elements["form__email"].value;
    const tipo_ingresso_ok = evento.target.elements["form__tipo_ingresso"].value;
    const setor_ingresso_ok = evento.target.elements["form__setor_ingresso"].value;
    const data_nasc_ok = evento.target.elements["form__data_nasc"].value;

    /*validar se o preenchimento esta correto*/
    
    criaIngresso(nome_ok, tipo_ingresso_ok, setor_ingresso_ok);

    /*Guarda o ingresso no LocalStorage*/
      

    /*Se puder criar vai para o ingresso*/
    window.location.href = "./ingresso.html";
   
})

function criaIngresso(nome, tipo, setor) {
    
    const ingresso = {
    'ing_nome': nome,
    'ing_tipo': tipo,
    'ing_setor': "Setor: " + setor,
    'ing_data': "Data: 11/03/2023",
    'ing_local': "Local: São Paulo - SP"
    }

    sessionStorage.setItem('ingresso', JSON.stringify(ingresso))
}