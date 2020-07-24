import { Sequelize } from "sequelize";

const db = process.env.POSTGRES_DB ?? 'teste';
const username = process.env.POSTGRES_USER ?? 'teste';
const password = process.env.POSTGRES_PASSWORD ?? 'teste123';

export const sequelize = new Sequelize(`postgres://${username}:${password}@localhost:5432/${db}`);
