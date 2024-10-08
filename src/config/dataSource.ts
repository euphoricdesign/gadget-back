import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import * as fs from 'fs';
import * as path from 'path';

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Cambia esto a true cuando tengas el certificado correcto
    ca: process.env.CA_CERT || (DATABASE_URL ? fs.readFileSync(path.join(__dirname, '..', '..', 'certs', 'ca.pem')).toString() : undefined),
  },
  entities: [User, Credential, Order, Product, Category],
  synchronize: true,
  logging: false,
});