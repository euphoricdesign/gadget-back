"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Order_1 = require("../entities/Order");
const Category_1 = require("../entities/Category");
const Product_1 = require("../entities/Product");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
console.log('CA Path:', path.join(__dirname, '..', '..', 'certs', 'ca.pem'));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: envs_1.DATABASE_URL,
    host: envs_1.DATABASE_URL ? undefined : envs_1.DB_HOST,
    port: envs_1.DATABASE_URL ? undefined : envs_1.DB_PORT,
    username: envs_1.DATABASE_URL ? undefined : envs_1.DB_USER,
    password: envs_1.DATABASE_URL ? undefined : envs_1.DB_PASSWORD,
    database: envs_1.DATABASE_URL ? undefined : envs_1.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Credential_1.Credential, Order_1.Order, Product_1.Product, Category_1.Category],
    subscribers: [],
    migrations: [],
    ssl: envs_1.DATABASE_URL ? {
        rejectUnauthorized: true,
        ca: fs.readFileSync(path.join(__dirname, 'src', 'certs', 'ca.pem')).toString(),
    } : false
});
