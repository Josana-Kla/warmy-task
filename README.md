<div id="top"></div>
<h1 align="center"> Tasks: Gerenciamento de tarefas </h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=v16.16.0&color=orange" alt="node version">
  <img src="https://img.shields.io/static/v1?label=npm%20version&message=9.7.2&color=orange" alt="npm version">
  <a href="//www.linkedin.com/in/josana/"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5" style="border-radius: 3px; height:21px" alt="LinkedIn"></a>
</p>
<p align="center">
<img src="https://img.shields.io/badge/STATUS-CONCLUÍDO-green"/>
</p>
  
> Status do Projeto: 🟢 CONCLUÍDO


### Tópicos  

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Acesso ao projeto](#acesso-ao-projeto)

:small_blue_diamond: [Como abrir e rodar o projeto localmente](#como-abrir-e-rodar-o-projeto-localmente)

:small_blue_diamond: [Funcionalidades da aplicação](#funcionalidades-da-aplicação)

:small_blue_diamond: [Demonstração da aplicação](#demonstração-da-aplicação)

:small_blue_diamond: [Tecnologias utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Desenvolvido por](#desenvolvido-por)

:small_blue_diamond: [Contatos](#contatos)

</br>

## <a name=“descrição-do-projeto”>🧾Descrição do projeto<a/>  

<p align="justify">
O projeto foi feito utilizando principalmente Node.js com Express.js, utilizando Prisma ORM para se conectar com o banco de dados PostgreSQL, com intuito de criar uma API para gerenciar tarefas. A aplicação conta com um CRUD de tarefas com suas regras de negócio básicas.
O projeto foi estruturado pensando em uma arquitetura multicamadas e utilizando princípios do clean code para melhor organização e clareza do código.
</p>

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## <a name=“acesso-ao-projeto”>📁Acesso ao projeto<a/> 

Você pode [acessar o código fonte do projeto](https://github.com/Josana-Kla/warmy-task) ou [baixá-lo](https://github.com/Josana-Kla/warmy-task/archive/refs/heads/main.zip).

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>


## <a name=“como-abrir-e-rodar-o-projeto-localmente”>🔌Como abrir e rodar o projeto localmente<a/> 

Inicializar o projeto Tasks de gerenciamento de tarefas em seu ambiente de desenvolvimento local é bem simples. Primeiro tenha certeza de ter o [Git](https://git-scm.com/downloads) e [Node.js](https://nodejs.org/) instalados e então siga os passos abaixo.

**OBS.: Use o Node na versão 16.16.0. Caso tenha o NVM (Node Version Manager) instalado, rode o comando `nvm use` (isso fará o nvm ler o arquivo relacionado a ele no projeto e usar a versão do node usado no projeto)** 


1. Clone o código fonte usando o terminal/prompt de comando

 `git clone https://github.com/Josana-Kla/warmy-task.git`

2. Abra o diretório do projeto na IDE de sua preferência

3. Instale as dependências de desenvolvimento

 `npm install`

4. Configure seu arquivo `.env` usando o arquivo `.env-example` como base

5. Rode as migrations

 `npm run dev:migration` 

6. Execute um servidor de desenvolvimento local

 `npm run dev`

7. Use o Thunder Client ou Postman ou a plataforma de sua preferência para testar a API.
  
Pronto! O projeto Tasks já está funcionando! 

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>


## <a name=“funcionalidades-da-aplicação”>🔨Funcionalidades da aplicação<a/> 


### O que foi feito:
- [x] Cadastro de tarefas, contendo título e descrição
- [x] Listagem de todas as tarefas
- [x] Listagem de uma tarefa específica
- [x] Atualização de uma tarefa com possibilidade de mudar seu status para true quando estiver concluída
- [x] Remoção de uma tarefa


<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

  
## <a name=“demonstração-da-aplicação”>🎬Demonstração da aplicação<a/>

### Rotas disponíveis e parâmetros esperados:

Use o endereço local com a seguinte porta: **localhost:5000**

**POST /tasks**

  ```json
  {
    "title": "test example",   // required. Só recebe string
    "description": "description example" // só recebe string
  }
  ```
**GET /tasks**

**GET /tasks/:id** - insira um id de uma tarefa existente

**PUT /tasks/:id** - insira um id de uma tarefa existente

 ```json
  {
    "title": "test example",   // required. Só recebe string
    "description": "description example", // só recebe string
    "status": true // recebe um valor booleano. True para dizer que a tarefa foi concluída
  }
  ```

**DELETE /tasks/:id** - insira um id de uma tarefa existente

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>
  
## <a name=“tecnologias-utilizadas” id="techs">✔Tecnologias utilizadas<a/>
### As tecnologias e bibliotecas utilizadas para o desenvolvimento do projeto foram:
- ``Node.JS``
- ``Express.JS``
- ``Prisma ORM``
- ``PostgreSQL``
- ``Joi``
- ``Http-status``
- ``Eslint``
- ``Nodemon``
- ``Dotenv``
- ``Git``
- ``Visual Studio Code IDE`` 
</br>

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## <a name=“desenvolvido-por”>👩‍💻Desenvolvido por<a/>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Josana-Kla/">
        <img src="https://avatars.githubusercontent.com/u/73187817?s=400&u=343a33ac5cbd16538d7c39b20e42764dfcf1c7e0&v=4" title="Josana Klagenberg" alt="Desenvolvido por Josana Klagenberg" width=115><br/>
        <sub><b>Josana Klagenberg</b></sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## <a name=“contatos”>☎Contatos<a/>

**LinkedIn:** [/josana](https://www.linkedin.com/in/josana/) 

**E-mail**: [contato.josana@gmail.com](mailto:contato.josana@gmail.com)

**Perfil no GitHub:** [/Josana-Kla](https://github.com/Josana-Kla)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>