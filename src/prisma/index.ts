import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

// Carregar variáveis de ambiente
dotenv.config();

// Criar pool de conexão
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Criar adapter
const adapter = new PrismaPg(pool);

// Criar cliente com adapter
const prismaClient = new PrismaClient({ adapter });

export default prismaClient;