// Interfaces

// Interface é um conjunto de tipos primitivos que definem e delimitam as propriedades
// de um objeto
interface ICaneta {
    corTinta: string,
    tamanhoMm: number,
    marca: string,
    estaAberta: boolean
}
//  Q1 Crie uma variável e dê a tipagem da interface acima:

const caneta: ICaneta = {
    corTinta: "vermelho",
    tamanhoMm: 0.2,
    marca: "bic",
    estaAberta: true,
}

// Você pode criar propriedades opcionais colocando um ponto de interrogração
// em fremte ao nome da propriedade
// EX:
// interface ICaneta {
//     corTinta: string,
//     tamanhoMm: number,
//     marca?: string,
//     estaAberta?: boolean
// }

// Q2 Crie uma interface com propriedades opcionais e a implemente em uma variável
// que não utilize as propriedades marcadas como opcionais


interface IPessoa {
    qtdBraços?: number,
    nariz: string, 
    altura: number,
    taVivo?: boolean, 
}

const pessoa: IPessoa = { 
    nariz: "grande",
    altura: 1.60,
}

// Você pode utilizar operadores lógicos em seus tipos como OR
// "|" e AND "&&"
// Com o operador | você pode delimitar os valores permitidos para aquela
// propriedade
// EX:

interface IGarrafaAgua {
    estado: "vazia" | "meio cheia" | "cheia",
    quantidadeMl: 250 | 500 | 1000 | 2000,
    minerio: boolean,
    sais: boolean,
}

//Q3 Implemente uma variavel com a interface acima e observe o
// comportamento da propriedade estado

const garrafaAgua: IGarrafaAgua = {
    estado: "cheia",
    quantidadeMl: 500,
    minerio: true,
    sais: false,
}

// Voce pode aninhar(termo em inglês: nested) interfaces para tipar objetos aninhados
// colocando o tipo da propriedade como o nome de outro Type
// ou interface
// Ex:

interface IDadosAnimal {
    filo: string,
    genero: string,
    especie: string,
    dominio: string,
}

interface IAnimal {
    nome: string,
    peso: number,
    dados: IDadosAnimal,
}

//Q4 Implemente uma variavel aninhada do tipo IAnimal

const animal: IAnimal = {
    nome: "cachorro",
    peso: 20,
    dados: {
        filo: "Cordados", 
        genero: "femea", 
        especie: "Canis lupus familiaris",
        dominio: "Eukaryota",
    }, 
}

// Voce pode estender uma interface a partir de uma outra interface
// fazendo com que a mesma possua as suas próprias propriedades
// somadas as propriedades da interface estendida
// Ex:

interface  IDesenvolvedor {
    nome: string,
    idade: number,
    experienciasPassadas: string[]
}
interface IHabilidades extends IDesenvolvedor {
    ingles: boolean,
    react: boolean,
    angular: boolean,
    vue: boolean,
    node: boolean,
    sql: boolean

}

// Q5 Crie uma variavel que implemente a interface IHabilidades

const habilidades: IHabilidades = { 
    nome: "Karina",
    idade: 21,
    experienciasPassadas: ["Trampolim","Level um"],
    ingles: true,
    react: true,
    angular: false,
    vue: false, 
    node: false,
    sql: false,
}



