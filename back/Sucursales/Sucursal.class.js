import { DataTypes, Model } from "sequelize"
import { sequelize } from "../BD.js"


export class Branch extends Model { }

Branch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    addres: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "branch",
  },
);

// import { database } from '../BD.js';

// export class Sucursal {
//   static async findAll() {
//     const [result] = await database.query('SELECT * FROM sucursal');
//     return result;
//   }

//   static async findOne(id) {
//     const query = 'SELECT * FROM sucursal WHERE id = ?';
//     const [result] = await database.query(query, id);
//     return result;
//   }

//   static async add(direccion, telefono) {
//     const query = 'INSERT INTO sucursal (direccion, telefono) VALUES (?, ?)';
//     const [result] = await database.query(query, [direccion, telefono]);
//     return result;
//   }

//   static async update(id, direccion, telefono) {
//     const sql = 'UPDATE sucursal SET direccion = ?, telefono = ? WHERE id = ?';
//     const [result] = await database.query(sql, [direccion, telefono, id]);
//     return result;
//   }

//   static async delete(id) {
//     const query = 'DELETE FROM sucursal where id = ?';
//     const [result] = await database.query(query, [id]);
//     return result;
//   }
// }
