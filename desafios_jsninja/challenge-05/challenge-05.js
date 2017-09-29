/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['marcel', 1, true, 22, 'ola-mundo'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function muFunction(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
muFunction(myarray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(um, dois){
    return um[dois];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray = ['ola', 44, true, 'meuarraylol', '11'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(meuArray, 0);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
    var obj = {
        harrypotter: {
            quantidadePaginas: 33,
            autor: 'John',
            editora: 'Viloak'
        },
        matrix: {
            quantidadePaginas: 133,
            autor: 'Paul',
            editora: 'SS Viloak'            
        },
        titanic: {
            quantidadePaginas: 1323,
            autor: 'Serj Paul',
            editora: 'Dk'             
        }
    };
    return !bookName ? obj : obj[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function book(bookName){
    var obj = {
        "harry potter": {
            quantidadePaginas: 33,
            autor: 'John',
            editora: 'Viloak'
        },
        "matrix": {
            quantidadePaginas: 133,
            autor: 'Paul',
            editora: 'SS Viloak'            
        },
        "titanic": {
            quantidadePaginas: 1323,
            autor: 'Serj Paul',
            editora: 'Dk'             
        }
    };
    return !bookName ? obj : "O livro " + bookName + " tem " +  obj[bookName].quantidadePaginas + " páginas!";
}


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + bookName + " é " +  obj[bookName].autor);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?