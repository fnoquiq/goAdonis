# GoAdonis

[Adonis](https://adonisjs.com/) framework study case.

---

## :hammer: Configurar a aplicação:

- O SGDB desta aplicação é o PostgreSQL, para isso, basta executar em seu terminal o seguinte comando: `sudo docker run --name postgresbarber -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`. Este comando será responsável por levantar um container docker todo configurado para o uso do PostgreSQL;

- Está aplicação utiliza o Redis para organizar os emails a serem enviados. Desta forma basta executar em seu terminal o seguinte comando: `sudo docker run --name redis -p 6379:6379 -d -t redis:alpine`. Este comando será responsável por levantar um container docker todo configurado para o uso do Redis;

- Copie o arquivo `.env.example` e renomeie a cópia para `.env.`. Após isso, preencha as informações necessárias dele.

- Execute o comando `yarn` para instalar todas as dependências necessárias do projeto.

- Para rodar as migrations, execute `adonis migration:run`. **Certifique-se de que o PostgreSQL esteja configurado e iniciado**.

---

## :horse_racing: Iniciar a aplicação:

- Execute `adonis serve --dev` para levantar a API.

- Execute `adonis kue:listen` para levantar a fila.

---

## :dart: Rotas da API:

- Para verificar as rotas disponiveis desta api, execute no terminal `adonis route:list`.
