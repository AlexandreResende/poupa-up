import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB ?? "poupaup",
  username: process.env.POSTGRES_USER ?? "poupaup",
  password: process.env.POSTGRES_PASSWORD ?? "teste",
  host: "database",
  dialect: "postgres",
  repositoryMode: true,
  models: [ __dirname + "/**/*-model.ts" ]
});
