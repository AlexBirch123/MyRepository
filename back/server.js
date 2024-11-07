import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { routerSuc } from './Sucursales/Sucursales.routes.js';
// import { routerProd } from './Productos/Productos.routes.js';
import { routerUsu } from './Usuarios/Usuario.routes.js';
import { routerCli } from './Clientes/Cliente.routes.js';
import cors from 'cors';

const port = 8080;

//Abre servidor con Express
export const app = express();

//middleware para obtener el cuerpo de los formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Obtener el nombre del archivo y el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());


app.use('/allBranches', routerSuc);
app.use('/allClients', routerCli);
// app.use('/allProducto', routerProd);
app.use('/allUsers', routerUsu);
app.use((_, res) => {
  return res.status(404).send({ message: 'Pagina no encontrada' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
// // Define las rutas
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));  
// });
// app.get('/Registro', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'registro.html'));  
// });
// app.get('/Sucursal', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'Sucursal.html'));  
// });
// app.get('/carrito', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'carrito.html'));  
// });
// app.get('/favoritos', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'favoritos.html'));  
// });
// app.get('/perfil', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'perfil.html'));  
// });
// app.get('/tienda', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'tienda.html'));  
// });
// app.get('/clientes', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'clientes.html'));  
// });
// app.get('/empleados', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'empleados.html'));  
// });
// app.get('/productos', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'productos.html'));  
// });
// app.get('/proveedores', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'proveedores.html'));  
// });
// app.get('/ventas', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'ventas.html'));  
// });



