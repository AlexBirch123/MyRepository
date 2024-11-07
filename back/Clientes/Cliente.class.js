import { DataTypes, Model } from "sequelize"
import { sequelize } from "../BD.js"


export class Client extends Model { }

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dni: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: "client",
  },
);


// import { database } from '../BD.js';

// export class Usuario {
//   static async findAll() {
//     const [result] = await database.query('SELECT * FROM usuarios');
//     return result;
//   }

//   static async findOne(id) {
//     const query = 'SELECT * FROM usuarios WHERE id = ?';
//     const [result] = await database.query(query, id);
//     return result;
//   }

//   static async add(username, email, psw) {
//     const query =
//       'INSERT INTO usuarios (username, email, psw) VALUES (?, ?, ?)';
//     const [result] = await database.query(query, [username, email, psw]);
//     return result;
//   }

//   static async update(id, username, email, psw) {
//     const sql =
//       'UPDATE usuarios SET username = ?, email = ?, psw = ? WHERE id = ?';
//     const [result] = await database.query(sql, [username, email, psw, id]);
//     return result;
//   }

//   static async delete(id) {
//     const query = 'DELETE FROM usuarios where id = ?';
//     const [result] = await database.query(query, [id]);
//     return result;
//   }
// }
