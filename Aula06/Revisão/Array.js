//aluno = id | nome | uf | curso | disciplina

var tabela = [];

const UFs = [
    id = 1, sigla = "RJ",
    id = 2, sigla = "SP",
    id = 3, sigla = "MG",
    id = 4, sigla = "ES"
]

console.log('Tamanho da tabela', tabela.length);

let novo = {
    id: 1,
    nome: "Billy",
    uf: 1,
    curso: "Gastronomia",
    disciplina: "Paes"
}
tabela.push(novo); //Preenchimento de array
novo = {
    id: 2,
    nome: "Gil",
    id: 2,
    curso: "Musica",
    disciplina: "Partituras"
};
tabela.push(novo);
novo = {
    id: 3,
    nome: "Braya",
    uf: 3,
    curso: "Musica",
    disciplina: "Teclado"
};
tabela.push(novo);
novo = {
    id: 4,
    nome: "Pedro",
    uf: 4,
    curso: "Musica",
    disciplina: "Violino"
};
tabela.push(novo);
novo = {
    id: 5,
    nome: "Matias",
    uf: 3,
    curso: "Informatica",
    disciplina: "Mouse"
};
tabela.push(novo);

//SELECT
let nomes = tabela.map(item => item.nome);
console.log('Tabela completa', nomes);

//SELECT * FROM tabela WHERE nome LIKE 'B%'
let letraB = tabela.filter(item => item.nome.substr('B', 1));
console.log('Nomes com a leta B na tabela', letraB);

//UPDATE tabela SET nome = UPPER(nome) WHERE (id = 2) 
for (let item of tabela) {
    if (item.id == 2)
        item.nome = item.nome.toUpperCase();
}

console.log('Tabela completa', tabela);

//Exemplo acima com iterador
//Se condição atende único registro == find

let idDois = tabela.find(item => item.id == 2);
if (idDois) idDois.nome = idDois.nome.toLowerCase();
console.log('ID 2 da tabela', idDois);

//Se condição atende múltiplos registros == filter

//DELETE FROM tabela WHERE (curso = 'Musica')
let semMusica = [];
tabela.forEach(linha => {
    if (linha.curso != 'Musica')
        semMusica.push(linha);
}); //DELETE gerando novo array apenas com os cursos diferentes de Musica
console.log('Sem Musica', semMusica);

let semM = tabela.filter(item => item.curso != 'Gastronomia');
//DELETE sem necessidade do if
console.log("Sem Gastronomia", semM);


let ufSP = UFs.find((item) => item.sigla == 'SP');
let id = ufSP.id;
//SELECT T.* FROM tabela T
//JOIN UFs U ON (T.uf = U.id)
//WHERE (T.sigla = 'SP')
let paulistas = tabela.filter((item) => item.uf == id);
console.log("paulistas", paulistas);

//spread
let aGastronomia = tabela.filter(item) => item.curso == "Gastronomia";
let