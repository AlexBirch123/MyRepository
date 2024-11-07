import { Client } from './Cliente.class.js';

export const getAll = async (req, res) => {
  await Client.sync({ alter: true })
  try {
    const result = await Client.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getOne = async (req, res) => {
  await Client.sync({ alter: true })

  const id = req.params.id;
  try {
    const result = await Client.findAll({ where: { id: id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

export const add = async (req, res) => {
  await Client.sync({ alter: true })
  const { dni, name, address, phone } = req.body;
  try {
    const result = await Client.create({ dni: dni, name: name, address: address, phone: phone });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  await Client.sync({ alter: true })

  const { id } = req.params;
  let datos = {}
  if (req.body.name) datos.name = req.body.name
  if (req.body.address) datos.address = req.body.address
  if (req.body.phone) datos.phone = req.body.phone
  try {
    const result = await Client.update(datos, { where: { id: id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  await Client.sync({ alter: true })

  const { id } = req.params;
  try {
    const result = await Client.destroy({ where: { id: id } });
    res
      .status(200)
      .send({ message: `Cliente id: ${id} eliminado con exito`, result });
  } catch (error) {
    res.status(500);
  }
};
