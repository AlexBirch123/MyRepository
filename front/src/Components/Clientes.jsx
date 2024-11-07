import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isRequired, setIsRequired] = useState(true);
  const [editingClient, setEditingClient] = useState(null);
  const nombreRef = useRef(null);
  const direccionRef = useRef(null);
  const telefonoRef = useRef(null);
  const dniRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await fetch("http://localhost:8080/allClients")
          .then((res) => res.json())
          .then((data) => {
            setClientes(data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const existUser = async(dni)=>{
    try {
      await fetch(`http://localhost:8080/allUser/${dni}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    } catch (error) {
      return null
    }
  }

  // Crear o actualizar cliente
  const createUpdateClient = async (event) => {
    event.preventDefault();
    const name = nombreRef.current?.value;
    const address = direccionRef.current?.value;
    const phone = Number(telefonoRef.current?.value);
    const dni = Number(dniRef.current?.value);

    if (editingClient) {
      // Actualizar cliente existente
      const datos = {
        name: name,
        address: address,
        phone: phone,
        dni: dni,
      };
      try {
        const res = await fetch(
          `http://localhost:8080/allClients/${editingClient.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
          }
        );
        if (!res.ok) {
          let datosNotNull = {};
          if (datos.name) datosNotNull.name = datos.name;
          if (datos.address) datosNotNull.address = datos.address;
          if (datos.phone) datosNotNull.phone = datos.phone;
          if (datos.dni) datosNotNull.dni = datos.dni;
          const updatedClientes = clientes.map((cliente) =>
            cliente.id === editingClient.id
              ? { ...clientes, datosNotNull }
              : cliente
          );
          setClientes(updatedClientes);
          setEditingClient(null);
          setIsRequired(true)
        }
      } catch (error) {
        console.log(error);
      }
    } else if (name && address && phone && dni) {
      // Crear nuevo cliente
      let newClient = {
        name: name,
        address: address,
        phone: phone,
        dni: dni,
      };
      const user = existUser(dni)
      if (user) {
        const confirm = window.confirm(
          "Ya existe usuario con este DNI ¿Desea completar los datos del cliente automaticamente?"
        );
        if (confirm){
          newClient.name = user.name
          newClient.address = user.address
          newClient.phone = user.phone
        }
      } 
      try {
        const res = await fetch("http://localhost:8080/allClients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClient),
        });
        if (!res.ok) {
          const completeClient = await res.json();
          setClientes([...clientes, completeClient]);
          resetForm();
          setFormVisible(false); // Ocultar formulario después de crear o actualizar cliente
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error al crear o actualizar Cliente");
    }
  };

  // Mostrar/ocultar formulario
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    setEditingClient(null); // Resetear cliente en edición
  };

  // Limpiar formulario
  const resetForm = () => {
    if (nombreRef.current) nombreRef.current.value = "";
    if (direccionRef.current) direccionRef.current.value = "";
    if (telefonoRef.current) telefonoRef.current.value = "";
    if (dniRef.current) dniRef.current.value = "";
  };

  // Función para eliminar cliente
  const deleteCliente = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de eliminar este cliente?"
    );
    if (confirmDelete) {
      await fetch(`http://localhost:8080/allClients/${id}`, {
        method: "DELETE",
      });
      const updatedClients = clientes.filter((client) => client.id !== id);
      setClientes(updatedClients);
    }
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <div className="btn-group" style={{ marginBottom: "3%" }}>
        <button
          id="b_create"
          onClick={toggleFormVisibility}
          type="button"
          className="btn btn-primary"
        >
          {formVisible ? "Cancelar" : "Crear Cliente"}
        </button>
      </div>

      {/* Formulario visible para crear o editar cliente */}
      {formVisible && (
        <form
          id="clienteForm"
          onSubmit={createUpdateClient}
          style={{ marginTop: "5%" }}
        >
          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              ref={nombreRef}
              name="Nombre"
              className="form-control"
              required = {isRequired}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Direccion" className="form-label">
              Dirección:
            </label>
            <input
              type="text"
              ref={direccionRef}
              name="Direccion"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Telefono" className="form-label">
              Teléfono:
            </label>
            <input
              type="text"
              ref={telefonoRef}
              name="Telefono"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="DNI" className="form-label">
              DNI:
            </label>
            <input
              type="text"
              ref={dniRef}
              name="DNI"
              className="form-control"
              required={isRequired}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {editingClient ? "Actualizar Cliente" : "Guardar Cliente"}
          </button>
        </form>
      )}

      {/* Tabla de Clientes */}
      <div className="table-responsive">
        <h2>Listado de Clientes</h2>
        <table className="table table-bordered" id="clienteTable">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>DNI</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 ? (
              clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.name}</td>
                  <td>{cliente.address}</td>
                  <td>{cliente.phone}</td>
                  <td>{cliente.dni}</td>
                  <td>
                    <button
                      onClick={() => {
                        toggleFormVisibility();
                        setEditingClient(cliente);
                        setIsRequired(false);
                      }}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => deleteCliente(cliente.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No hay clientes registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clientes;
