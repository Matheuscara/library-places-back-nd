
## Justificativa

Api simples com o intuido de retornar os locais em tordo de um raio apartir da geolocalizacao atual recebida.

## Inicializar Projeto Através do NPM

Nosso primeiro passo é clonar o projeto e entrar na pasta do projeto;

```bash
$ git clone https://github.com/Matheuscara/library-places-back-nd
```

O proximo passo é baixar as bibliotecas e iniciar o projeto;

```bash
npm install
npm run start
```

## End-Points

```bash
    /places/all -> Retorna todos os locais a partir da geolocalizacao
```

```bash
    /places/categories/:latitude/:longitude/:raio -> Retorna as categorias dos locais a partir da geolocalizacao
```

```bash
    /places/:id -> Retorna o local a partir do id de indentificacao
```

## Tecnologias:

O desenvolvimento se consiste em tais bibliotecas:

- [NODE](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Google Places Api](https://developers.google.com/maps/documentation/places/web-service/search/)