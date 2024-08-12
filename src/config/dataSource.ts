import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL, // Usar la URL de la base de datos si está disponible
  host: DATABASE_URL ? undefined : DB_HOST,
  port: DATABASE_URL ? undefined : DB_PORT,
  username: DATABASE_URL ? undefined : DB_USER,
  password: DATABASE_URL ? undefined : DB_PASSWORD,
  database: DATABASE_URL ? undefined : DB_NAME,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
  ssl: {
    rejectUnauthorized: false // Necesario para conexiones SSL en Render
  }
});