
## Instalação

1. Clone este repositório:

2. Entre no diretório do projeto:

3. Execute o script de instalação:
chmod +x install.sh
./install.sh

4. Inicie o servidor:
 npm run docker:dev

psql -U hugo -d bancoapi
![image](https://github.com/Hugohsk99/Eventos/assets/68088380/8c93092f-c953-4a0a-9979-9aa1d7b63703)

![image](https://github.com/Hugohsk99/Eventos/assets/68088380/78e5fde6-337f-4e5c-92f2-8d8c82a5c9c0)


├── config
├── database
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.stage.yml
├── docker-compose.yml
├── Dockerfile
├── estrutura-do-projeto.txt
├── frontend
│   ├── Dockerfile
│   ├── node_modules
│   ├── public
│   └── src
|       ├── views
|       |    └── Login.tsx  
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── log
│   └── access.log
├── misc
│   └── heisenberg.png
├── node_modules
├── package.json
├── package-lock.json
├── postman
│   ├── RESTful_API_eventos.postman_collection.json
│   └── RESTful_API_eventos.postman_environment.json
├── README.md
├── renovate.json
├── scripts
│   ├── be-node-dev.sh
│   └── wait-for-it.sh
├── src
│   ├── consts
│   │   └── ConstsUser.ts
│   ├── controllers
│   │   ├── auth
│   │   │   ├── changePassword.ts
│   │   │   ├── index.ts
│   │   │   ├── login.test.ts
│   │   │   ├── login.ts
│   │   │   ├── register.test.ts
│   │   │   └── register.ts
│   │   └── users
│   │       ├── destroy.ts
│   │       ├── edit.ts
│   │       ├── index.test.ts
│   │       ├── index.ts
│   │       ├── list.ts
│   │       └── show.ts
│   ├── index.ts
│   ├── middleware
│   │   ├── checkJwt.ts
│   │   ├── checkRole.ts
│   │   ├── errorHandler.ts
│   │   ├── getLanguage.ts
│   │   └── validation
│   │       ├── auth
│   │       │   ├── index.ts
│   │       │   ├── validatorChangePassword.ts
│   │       │   ├── validatorLogin.ts
│   │       │   └── validatorRegister.ts
│   │       └── users
│   │           ├── index.ts
│   │           └── validatorEdit.ts
│   ├── orm
│   │   ├── config
│   │   │   ├── ormconfig-seed.ts
│   │   │   └── ormconfig.ts
│   │   ├── dbCreateConnection.ts
│   │   ├── entities
│   │   │   └── users
│   │   │       ├── types.ts
│   │   │       └── User.ts
│   │   ├── migrations
│   │   │   └── 1590521920166-CreateUsers.ts
│   │   └── seeds
│   │       └── 1590519635401-SeedUsers.ts
│   ├── routes
│   │   ├── index.ts
│   │   ├── pages
│   │   │   ├── 404.ts
│   │   │   └── root.ts
│   │   └── v1
│   │       ├── auth.ts
│   │       ├── index.ts
│   │       └── users.ts
│   ├── types
│   │   ├── express
│   │   │   └── index.d.ts
│   │   ├── JwtPayload.ts
│   │   └── ProcessEnv.d.ts
│   └── utils
│       ├── createJwtToken.ts
│       └── response
│           ├── custom-error
│           │   ├── CustomError.ts
│           │   └── types.ts
│           └── customSuccess.ts
└── tsconfig.json
