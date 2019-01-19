
import * as Sequelize from 'sequelize';

const db = 'poupaup';
const username = 'postgrestest';
const password = 'postgrestest';

export const sequelize = new Sequelize(db, username, password, {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,
  pool: {
    max: 50,
    min: 1,
    idle: 1
},
});