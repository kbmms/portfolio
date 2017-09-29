/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Jhon',
    lastname: 'Alv',
    age: 20
}
console.log( 'Propriedades de "person":' + person);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

var arr = [];
arr.push(person.name);
arr.push(person.lastname);
arr.push(person.age);
console.log(arr)
/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

books.push({name: "Jquery Mobile", pages: 122})
books.push({name: "Javascript Ninja", pages: 2122})
books.push({name: "HTML5", pages: 5122})


books.push(matrix = {'name': 'matrix', 'pages': 122}, mumia = {'name': 'mumia', 'pages': 222}, zumbi = {'name': 'zumbi', 'pages': 2122})
console.log( '\nLista de livros:' + books);

/*
Mostre no console todos os livros.
*/
console.log(books)


console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var last = books.pop();
console.log(last)

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books)

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' + books);

/*
Mostre os livros nesse formato no console:
*/
console.log(books)

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i = 0; i < books.length; i++){
    for(var prop in books[i]){
        console.log( prop +" " + books[i][prop]);
    }
}

/*  
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var  myName = ["M", "A", "R", "C", "E", "L"];
console.log( '\nMeu nome é:' + myName.join(""));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort();
