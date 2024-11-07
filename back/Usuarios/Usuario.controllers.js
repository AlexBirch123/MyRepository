import { User } from './Usuario.class.js';

export const getAll = async (req, res) => {
  await User.sync({ alter: true })
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getByDNI = async (req, res) => {
  await User.sync({ alter: true })

  const dni = req.params.dni;
  try {
    const result = await User.findAll({ where: { dni: dni } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

export const getAllLevel = async (req, res) => {
  await User.sync({ alter: true })

  const level = req.params.level;
  try {
    const result = await User.findAll({ where: { level: level } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

export const add = async (req, res) => {
  await User.sync({ alter: true })

  const { dni, userName, email, pswHash, address, phone, level } = req.body;
  try {
    const result = await User.create({ dni: dni, userName: userName, email: email, pswHash: pswHash, address: address, phone: phone, level: level });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  await User.sync({ alter: true })

  const { dni } = req.params;
  const { userName, email, pswHash, address, phone, level } = req.body;
  try {
    const result = await User.update({ userName: userName, email: email, pswHash: pswHash, address: address, phone: phone, level: level }, { where: { dni: dni } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  await User.sync({ alter: true })

  const { dni } = req.params;
  try {
    const result = await User.destroy({ where: { dni: dni } });
    res
      .status(200)
      .send({ message: `Usuario dni: ${dni} eliminado con exito`, result });
  } catch (error) {
    res.status(500);
  }
};
