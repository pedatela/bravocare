# BravoCare

### Stack

* Node 16.16.0
* React 18.0.2
* PostgreSQL 12.12

### How to run
To run this project, you must have Docker and Docker Compose.
[Docker Docs](https://docs.docker.com/get-started),
[Docker Compose Installation](https://docs.docker.com/compose/install).
First you need to run this commands in this root project:

```console 
    docker-compose build
    docker-compose up -d
```
After that you need to run migrantions and seed to popupalte the database.
So you need to run this two commands:

```console 
    docker-compose exec  server npx sequelize db:migrate server
    docker-compose exec  server npx sequelize db:seed:all
```
Now you can access your client running in `localhost:3000` and your api is running `localhost:5000`

