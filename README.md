Desafio para colocar em prática os aprendizados em relação a utilização do nginx como proxy reverso. 
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.

Para utilizar a aplicação basta rodar o seguinte comando: docker-compose up -d 
A aplicação estará disponível http://localhost:8080

* A linguagem de programação para este desafio é Node/JavaScript.
