Algoritmo "exercicio05"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
n, i: inteiro
   fat: real // Fatorial cresce rápido, real evita overflow

// Seção de Declarações das variáveis 


Inicio
 repita
      escreva("Digite número positivo: ")
      leia(n)
   ate n >= 0

   fat <- 1
   para i de 1 ate n faca
      fat <- fat * i
   fimpara

   escreva("Fatorial de ", n, " é: ", fat)

// Seção de Comandos, procedimento, funções, operadores, etc... 


Fimalgoritmo