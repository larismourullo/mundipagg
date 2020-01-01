<p align="center">
  <img src="http://i65.tinypic.com/23hok7o.png" alt="Cabeçalho do Desafio Mundipagg"/>
</p>

## Conteúdo
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Tecnologias](#tecnologias)
  - [Documentação Github API](#documentação-github-api)
- [Informações Iniciais](#informações-iniciais)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Instalando as Dependências](#instalando-as-dependências)
- [Implementação](#implementação)
- [Testes](#testes)

## Visão Geral do Projeto
O principal objetivo do desafio é o desenvolvimento de uma página que siga a linha de design da Mundipagg, apresentando os dados do Github da empresa. Para isso é necessário realizar a integração com o Github API versão 3. Esta página deverá listar os repositórios, mostrar a quantidade de stars, forks, contributors e commits por projeto, seguindo mais ou menos a ideia do *mockup* disponível nesse [link](https://camo.githubusercontent.com/9fb6afb7f752ec0e4f4230a9d2e2b50b0b958abd/687474703a2f2f6936362e74696e797069632e636f6d2f6e66346669732e706e67).

### Tecnologias
- HTML5

- CSS
  - SASS
  - Normalize
  - Simple Grid
  - FontAwesome
  
- JavaScript
  - AngularJS 1.5
  - AngularUI Router
  - Angular Chart
  - Chart.js
  - Grunt (Concat, Uglify, Watch, Grunt-Sass, CssMin)
  - Jasmine
  - Karma

### Documentação Github API
A documentação da API utilizada para obter os dados está disponível em: [GitHub Developer API](https://developer.github.com/v3/).

## Informações Iniciais
Para realizar as ações a seguir, será necessário que tenha instalado em seu computador o **git** e o **node.js**. Abaixo seguem os sites para realizar o download e efetuar a instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código. Mas antes de clonar o repositório é importante que realize um **fork**, ou seja, criar uma cópia do mesmo para o seu github. Para isso basta subir a página e clicar no botão de mesmo nome e aguardar alguns minutos. Depois basta clicar em **clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
``` git
git clone <url-do-repositorio>
```

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
``` node
npm install
```

## Implementação


## Testes
Já para os testes será necessário que rode o seguinte comando **node** dentro da pasta do repositório:
``` node
npm test
```
Basicamente ele irá rodar o comando `karma start`, que varrerá todos os arquivos de testes criados para apresentar se os mesmos passaram ou não.
