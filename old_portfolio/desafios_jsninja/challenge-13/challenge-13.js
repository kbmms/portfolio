/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var arr = [1,2,3,4,5];
console.log( 'O array em formato de string é:'+ arr.toString() );
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];
var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
var brasil = sudeste.concat(sul)

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
brasil.unshift('Pará', 'Rondônia', 'Roraima ')

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
brasil.shift()

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.slice(7);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
console.log(newSul); //(3) ["Paraná", "Santa Catarina", "Rio Grande do Sul"]

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil)
/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Alagoas','Bahia','Ceará','Maranhão','Paraíba','Piauí','Grande do Norte','Sergipe'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste)

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.splice(5, 4)

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(nordeste)

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste)

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(brasil)

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = []
brasil.forEach(function(item, index){
    console.log(item)
    newBrasil.push({id: index, estado: item});
})

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
console.log(newBrasil)
// {id: 0, estado: "Pará"}
// {id: 1, estado: "Rondônia"}
// {id: 2, estado: "Roraima "}
// {id: 3, estado: "Espírito Santo"}
// {id: 4, estado: "Minas Gerais"}
// {id: 5, estado: "Rio de Janeiro"}
// {id: 6, estado: "São Paulo"}
// {id: 7, estado: "Paraná"}
// {id: 8, estado: "Santa Catarina"}
// {id: 9, estado: "Rio Grande do Sul"}



/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
var every = brasil.every(function(item){
   return  item.length > 7
})
//false

var map = brasil.map(function(item){
   return  item.length > 7
})
//["Pará", "Rondônia", "Roraima ", "Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo", "Paraná", "Santa Catarina", "Rio Grande do Sul"]
//[false, true, true, true, true, true, true, false, true, true]


console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
var filter = brasil.filter(function(item){
   return  item.length > 7
})
//Remove 
//["Rondônia", "Roraima ", "Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo", "Santa Catarina", "Rio Grande do Sul"]


/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
var some = brasil.some(function(item){
    return item === 'Pará';
});
console.log(some ? 'Pará foi incluido': 'Pará não foi incluido')
//Pará foi incluido



/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newBrasil.map(function(item, index){
    return {
        id: item.id + 1,
        estado: item.estado + ' pertence ao brasil'
    }
});

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var filter = map.filter(function(item, index){
    return item.id % 2 === 0;
});

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?