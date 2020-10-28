<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/praser/api-autenticacao">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">API Autenticação</h3>

  <p align="center">
    Microserviço responsável por realizar autenticações e fornecer tokens JTW.
    <br />
    <a href="https://documenter.getpostman.com/view/1406279/SWLmYkE4"><strong>Veja a documentação »</strong></a>
    <br />
    <br />
    <a href="https://github.com/praser/api-autenticacao/issues">Reportar um problema</a>
    ·
    <a href="https://github.com/praser/api-autenticacao/issues">Solicitar uma funcionalidade</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Sobre o projeto](#sobre-o-projeto)
  - [Construído com](#construído-com)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Exemplos de uso](#exemplos-de-uso)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)
- [Acknowledgements](#acknowledgements)

<!--BUILT WITH -->

## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Construído com

- [Nodejs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Começando

Para obter uma cópia local do serviço rodando siga os passos abaixo

### Pré-requisitos

Para poder executar o código do projeto você precisará possuir o npm ou o yarn instalados localmente

- npm

```sh
npm install npm@latest -g
```

- yarn

```sh
npm install yarn -g
```

### Instalação

1. Clone o repositório

```sh
git clone https://github.com/praser/api-autenticacao.git
```

2. Instale as dependências

- Usando o npm

```sh
npm install
```

- Usando o yarn

```
yarn install
```

3. Crie o arquivo .env com as configurações do servidor usando o arquvo .env.example como ponto de partida.

4. Inicie o serviço

- Usando o npm

```
npm run dev
```

- Usando o yarn

```
yarn dev
```

<!-- Exemplos de uso -->

## Exemplos de uso

Para se autenticar basata enviar uma requisição POST para o path authenticate com o payload abaixo, substituindos os placeholders <username> e <password> pelos valores correspondentes:

```
{
  "credentials": {
    "username": "<username>",
    "password":"<password>"
  }
}
```

Aqui está um exemplo utilizando o CURL:

```
curl --location --request POST '{{urlApiAutenticacao}}/authenticate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "credentials": {
        "username": "<username>",
        "password":"<password>"
    }
}'
```

### Configurando os drivers

A api realiza autenticações usutilizando dois métodos, in memory e ldap.

As configurações para indicar qual dos drivers deve ser utilizado deve ser incluídas no arquivo .env, conforme consta no arquivo .env.example.

Caso opte por utilizar o diver inMemory a aplicação considerará como válida quaisquer credenciais que possuam login e senha iguais.

O driver inMemory deve ser utilizado apenas em ambiente de desenvolvimento e com cautela. O usuo em ambiente de produção não é recomendado em nenhuma hipótese.

_para mais exemplos por favor viste a [documentação](https://documenter.getpostman.com/view/1406279/SWLmYkE4)_

<!-- ROADMAP -->

## Roadmap

Veja os [issues abertos](https://github.com/praser/api-autenticacao/issues) para ver a lista de funcionalidades propsotas (e também os problemas conhecidos).
./

<!-- Contribuindo -->

## Contribuindo

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito bem vindas**.

1. Faça um fork do projeto
2. Crie seu Feature Branch (`git checkout -b feature / AmazingFeature`)
3. Faça commit de suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Envie para o Branch (`git push origin feature / AmazingFeature`)
5. Abra uma pull request

<!-- Licença -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE`para mais informações.

<!-- Contato -->

## Contato

Rubens Praser júnior - [@rpaser](https://twitter.com/rpaser) - email

Link do projeto: [https://github.com/praser/api-autenticacao](https://github.com/praser/api-autenticacao)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/praser/repo.svg?style=flat-square
[contributors-url]: https://github.com/praser/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/praser/repo.svg?style=flat-square
[forks-url]: https://github.com/praser/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/praser/repo.svg?style=flat-square
[stars-url]: https://github.com/praser/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/praser/repo.svg?style=flat-square
[issues-url]: https://github.com/praser/repo/issues
[license-shield]: https://img.shields.io/github/license/praser/repo.svg?style=flat-square
[license-url]: https://github.com/praser/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rubens-praser-junior/
[product-screenshot]: images/screenshot.png
