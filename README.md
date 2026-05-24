# SkillMatch JS 

## Como a internet funciona
A internet funciona como uma rede de computadores conectados que trocam informações. 
Quando acessamos um site, nosso navegador (cliente) faz uma requisição para um servidor, 
que responde com os dados solicitados.

## Arquitetura cliente-servidor
O cliente é quem faz a requisição (navegador, aplicação) e o servidor é quem responde 
com os dados. No projeto, simulamos essa arquitetura com a função buscarVagasSimuladas(), 
que usa uma Promise para simular uma busca de dados em um servidor, com 1 segundo de delay 
antes de retornar as vagas.

## Sobre o projeto 

O SkillMatch JS é um simulador simples de compatibilidade entre um candidato e vagas. 

O projeto faz a comparação das habilidades deste candidato e os requisitos que as vagas pedem. 

Alguns pontos de comparação:
    - percentual de compatibilidade;
    - habilidades encontradas;
    - habilidades faltantes;
    - vaga mais compatível;
    - recomendação de estudo.

## Objetivo 

Praticar os principais conceitos do Módulo 01:
    - lógica de programação;
    - JavaScript;
    - tipos de dados;
    - condicionais;
    - operadores;
    - escopo;
    - laços de repetição;
    - funções;
    - arrow functions;
    - arrays;
    - métodos de array;
    - objetos;
    - classes;
    - herança;
    - this;
    - callbacks;
    - closures;
    - Promises;
    - async/await;
    - GitHub;
    - Kanban.

## Extensões utilizadas no VS Code

Code Runner — para executar o JavaScript direto no VS Code.
Prettier — formata o código automaticamente

## Como executar 

Este projeto pode ser executado de duas formas:

1. Abrir o navegador do Google Chrome.
2. Pressionar F12 ou Ctrl + Shift + J.
3. Abrir a aba Console
4. Copiar o código do arquivo skillmatch.js.
5. Colar no console.
6. Pressionar Enter.

**Via Node.js:**
1. Ter o Node.js instalado
2. No terminal, navegar até a pasta do projeto
3. Executar: `node skillmatch.js`

## Link Trello: 
https://trello.com/invite/b/6a0904fe53747e9c29ce0b41/ATTI4a409a4aba4aeb61b27f08c3b6b3de449A46E4DC/skillmatch-js-simulador-de-compatibilidade-com-vaga-front-end-junior 

## Link do vídeo explicando o projeto: 
https://youtu.be/Dmmj6n7YrHM

## Estrutura do projeto 

```txt
skillmatch-js/ 
|
|__skillmatch.js
|__README.md 



