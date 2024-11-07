// import { Producto } from './Productos.class.js';

// export const getAll = async (req, res) => {
//   try {
//     const result = await Producto.findAll();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const getOne = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const result = await Producto.findOne(id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500);
//   }
// };

// export const add = async (req, res) => {
//   const { descripcion, precio, stock } = req.body;
//   try {
//     const result = await Producto.add(descripcion, precio, stock);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const update = async (req, res) => {
//   const { id } = req.params;
//   const { descripcion, precio, stock } = req.body;
//   try {
//     const result = await Producto.update(id, descripcion, precio, stock);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const remove = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Producto.delete(id);
//     res
//       .status(200)
//       .send({ message: `Sucursal número ${id} eliminada con exito`, result });
//   } catch (error) {
//     res.status(500);
//   }
// };
