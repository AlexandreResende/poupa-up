import { Sequelize } from "sequelize-typescript";

const databaseName = process.env.POSTGRES_DB ?? 'poupaup';
const username = process.env.POSTGRES_USER ?? 'poupaup';
const password = process.env.POSTGRES_PASSWORD ?? 'teste';

export const sequelize = new Sequelize(databaseName, username, password, {
  host: "database",
  dialect: "postgres",
  repositoryMode: true,
  models: [ __dirname + "/**/*-model.ts" ]
});
