Algoritmo "exercicio2"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2026
Var
i:inteiro
nota, soma:real

// Seção de Declarações das variáveis 


Inicio
 soma <- 0
 para i de 1 ate 5 faca
   repita
     escreva("Digite a nota", i, "(0 a 10):")
     leia(nota)
   ate (nota >= 0) e (nota <= 10)
   soma <- soma + nota
 fimpara
 escreva("Média: ", soma /5)
// Seção de Comandos, procedimento, funções, operadores, etc... 


Fimalgoritmo