/*import { Sucursal } from './Sucursal.class.js';
const form = document.getElementById('sucData');
const b_show = document.getElementById('b_show');
const b_mod = document.getElementById('b_mod');
const b_del = document.getElementById('b_del');

// Instancia de Pintureria
const p = new Pintureria('Rio Color');
const suc = new Sucursal();

// -------------------------  Manejadores de eventos  ------------------------------

b_show.addEventListener('click', async () => {
  suc.findAll(result);
  const tableBody = document.querySelector('#sucursalTable tbody');
  tableBody.innerHTML = ''; // Limpia la tabla antes de llenarla
  result.forEach((sucursal) => {
    const row = document.createElement('tr');
    row.innerHTML = `
                  <td>${sucursal.id}</td>
                  <td>${sucursal.direccion}</td>
                  <td>${sucursal.telefono}</td>
              `;
    tableBody.appendChild(row);
  });
});
/*
form.addEventListener('submit', async () => {
  try {
    const modal = bootstrap.Modal.getInstance(
      document.getElementById('formModal')
    );
    modal.hide();
    //  form.reset();
    console.log('Sucursal Added');
  } catch (error) {
    throw new error();
  }
});


b_mod.addEventListener('click', () => {
  //p.updateSucursal(op);
  console.log('Se modificó una sucursal');
});

b_del.addEventListener('click', () => {
  //let op = Number(prompt('Ingrese ID de la sucursal'));
  //p.delSucursal(op);
  console.log('Sucursal eliminada');
});
*/
