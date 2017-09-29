/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(win, doc){
'use strict';

var counter = 0;
var temporizador;

var $button_start = doc.querySelector('[data-js="start"]');
var $button_stop = doc.querySelector('[data-js="stop"]');
var $button_reset = doc.querySelector('[data-js="reset"]');
var $input_display = doc.querySelector('[data-js="display"]');

function cronometro(){
    // console.log(counter++);
    temporizador =  setTimeout(cronometro, 1000)
    $input_display.value = counter++;
}

$button_start.addEventListener('click', function(){
    cronometro();
}, false);

$button_stop.addEventListener('click', function(){
    clearTimeout(temporizador);    
}, false);

$button_reset.addEventListener('click', function(){
    counter = 0;
    $input_display.value = 0;
    clearTimeout(temporizador);    
}, false);

})(window, document);