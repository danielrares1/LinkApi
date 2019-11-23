# Objetivo

Deverá construir uma API RESTful usando a tecnologia NodeJS

# Requisitos

* Criar contas testes nas plataformas Pipedrive e Bling.

* Criar uma integração entre as plataformas Pipedrive e Bling( A integração deve buscar
as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como
pedido no Bling).

* Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de
graça.

* Criar uma collection no banco de dados MongoDB agregando as oportunidades
inseridas no Bling por dia e valor total.

* Criar endpoint para trazer os dados consolidados da collection do MongoDB.


Instruções para montar o projeto:

*  É necessário ter o Node.JS instalado
    ```bash
    Baixar o [Node.js](https://nodejs.org/en/download/).
    ```
* Instalando os pacotes necessario do projeto
    ```bash
    npm install --save
    ```
* Rode o projeto
    * Executar:
    ```bash
    node index.js
    ```
