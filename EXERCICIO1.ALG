Algoritmo "Exercicio2"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
i,n,somaPares,qtdImpares:inteiro
// Seção de Declarações das variáveis 


Inicio
somaPares <- 0
   qtdImpares <- 0
   para i de 1 ate 20 faca
      escreva("Digite o ", i, "º número: ")
      leia(n)
      se n % 2 = 0 entao
         somaPares <- somaPares + n
      senao
         qtdImpares <- qtdImpares + 1
      fimse
   fimpara
   escreval("Soma dos pares: ", somaPares)
   escreval("Quantidade de ímpares: ", qtdImpares)
// Seção de Comandos, procedimento, funções, operadores, etc... 


Fimalgoritmo