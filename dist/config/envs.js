"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.JWT_SECRET = exports.DB_PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT) || 3000;
exports.DB_NAME = process.env.DB_NAME || "";
exports.DB_USER = process.env.DB_USER || "";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "";
exports.DB_HOST = process.env.DB_HOST || "";
exports.DB_PORT = Number(process.env.DB_PORT) || 5432;
exports.JWT_SECRET = process.env.JWT_SECRET || "secret";
// Añade esta nueva variable para la URL de la base de datos
exports.DATABASE_URL = process.env.DATABASE_URL || "";
