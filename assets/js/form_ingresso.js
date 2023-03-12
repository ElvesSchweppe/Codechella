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
    sessionStorage.setItem("ing_nome", nome);
    sessionStorage.setItem("ing_tipo", tipo);
    sessionStorage.setItem("ing_setor", setor);
    sessionStorage.setItem("ing_data", "11/03/2023");
    sessionStorage.setItem("ing_local", "São Paulo - SP");
}
