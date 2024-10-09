import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import * as fs from 'fs';
import * as path from 'path';

const caPath = path.join(__dirname, '..', '..', 'certs', 'ca.pem');

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL,
  host: DATABASE_URL ? undefined : DB_HOST,
  port: DATABASE_URL ? undefined : DB_PORT,
  username: DATABASE_URL ? undefined : DB_USER,
  password: DATABASE_URL ? undefined : DB_PASSWORD,
  database: DATABASE_URL ? undefined : DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
  ssl: DATABASE_URL ? {
    rejectUnauthorized: true,
    ca: fs.existsSync(caPath) ? fs.readFileSync(caPath).toString() : undefined,
  } : false
});