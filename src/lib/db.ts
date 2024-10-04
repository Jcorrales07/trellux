import { Sequelize } from 'sequelize';

// Cargar las variables de entorno desde el archivo .env.local
const sequelize = new Sequelize(
  process.env.DB_NAME as string,    // Nombre de la base de datos
  process.env.DB_USER as string,    // Usuario
  process.env.DB_PASSWORD,          // Contraseña
  {
    host: process.env.DB_HOST,      // Host
    port: Number(process.env.DB_PORT),  // Puerto
    dialect: 'postgres',            // Tipo de base de datos
  }
);

export default sequelize;
