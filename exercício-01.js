/*
1. Fácil
Faça um programa que receba um número e usando laços de repetição
calcule e mostre a tabuada desse número.
*/



const input = prompt('Insira um valor');
let output = '';

for (let i=0; i<=10; i++) {
  const result = input * i;
  output = output + `${input} x ${i} = ${result}\n`;

 alert(output);

}

/*
input = entrada do valor
for = para -> i = início -> i<= 10 = condição de parada ->
 i++ = soma de um valor até a condição de parada.
 */
/*
              OPÇÃO DE EXCUÇÃO FORA DO CONSOLE
output = output + `${input} x ${i} = ${result}\n`
alert('output')
*/









