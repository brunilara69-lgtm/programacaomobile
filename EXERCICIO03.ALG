Algoritmo "exercicio03"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
 i: inteiro
   n, maiorPos, menorNeg: real
// Seção de Declarações das variáveis 


Inicio
 maiorPos <- -1 // Inicializa com valor impossível se espera positivos
   menorNeg <- 1  // Inicializa com valor impossível se espera negativos

   para i de 1 ate 15 faca
      escreva("Digite número ", i, ": ")
      leia(n)

      // Lógica para Maior Positivo
      se n > 0 entao
         se (maiorPos = -1) ou (n > maiorPos) entao
            maiorPos <- n
         fimse
      fimse

      // Lógica para Menor Negativo
      se n < 0 entao
         se (menorNeg = 1) ou (n < menorNeg) entao
            menorNeg <- n
         fimse
      fimse
   fimpara

   escreval("Maior positivo: ", maiorPos)
   escreval("Menor negativo: ", menorNeg)

// Seção de Comandos, procedimento, funções, operadores, etc... 


Fimalgoritmo