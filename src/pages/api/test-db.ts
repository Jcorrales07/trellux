import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '@/lib/db';  // Ajusta el path a tu configuración de sequelize

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sequelize.authenticate();
    res.status(200).json({ message: 'Conexión exitosa con la base de datos' });
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con la base de datos', details: error });
  }
}
