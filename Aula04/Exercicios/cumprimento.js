{
    let bomDia = function() {
        return "bom dia";
    }

    let boaTarde = function() {
        return "boa tarde";
    }

    let data = new Date();  //atribui a data do momento a variavel data, 
                            //para mudar é necessário fazer a atribuição novamente

    let cumprimento;

    if (data.getSeconds() < 30) {
        cumprimento = bomDia;
    } else {
        cumprimento = boaTarde;
    }

    cumprimento();
}