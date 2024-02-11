const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;"
        ],
        correta: 2 // A resposta correta é a terceira opção (índice 2).
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "console.log()",
            "echo()"
        ],
        correta: 1 // A resposta correta é a segunda opção (índice 1).
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1 // A resposta correta é a segunda opção (índice 1).
    },
    {
        pergunta: "Qual dessas estruturas de controle é usada para tomar decisões em JavaScript?",
        respostas: [
            "for",
            "if",
            "while"
        ],
        correta: 1 // A resposta correta é a segunda opção (índice 1).
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "pop()",
            "append()"
        ],
        correta: 0 // A resposta correta é a primeira opção (índice 0).
    },
    {
        pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
        respostas: [
            "15",
            "105",
            "Erro"
        ],
        correta: 1 // A resposta correta é a segunda opção (índice 1).
    },
    {
        pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
        respostas: [
            "Converte uma string para minúsculas.",
            "Converte uma string para maiúsculas.",
            "Remove espaços em branco de uma string."
        ],
        correta: 1 // A resposta correta é a segunda opção (índice 1).
    },
    {
        pergunta: "Como você escreve um comentário de linha em JavaScript?",
        respostas: [
            "// Isso é um comentário",
            "<!-- Isso é um comentário -->",
            "/* Isso é um comentário */"
        ],
        correta: 0 // A resposta correta é a primeira opção (índice 0).
    },
    {
        pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
        respostas: [
            "function",
            "def",
            "fun"
        ],
        correta: 0 // A resposta correta é a primeira opção (índice 0).
    },
    {
        pergunta: "Qual é a maneira correta de incluir um arquivo JavaScript externo?",
        respostas: [
            "<script src='script.js'></script>",
            "<link rel='javascript' href='script.js'>",
            "<include src='script.js'></include>"
        ],
        correta: 0 // A resposta correta é a primeira opção (índice 0).
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) =>{
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    quiz.appendChild(quizItem)
}