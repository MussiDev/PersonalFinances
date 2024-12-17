import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola Mundo!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
