import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setIsAuthenticated, setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setLocalRole] = useState(''); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '' || password === '' || role === '') {
      setMessage('Por favor, ingrese todos los campos.');
      return;
    }

    // Validación de credenciales por rol
    if (role === 'Administrador' && username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setRole('Administrador'); 
      navigate('/dashboard');
    } else if (role === 'Vendedor' && username === 'vendedor' && password === 'vendedor123') {
      setIsAuthenticated(true);
      setRole('Vendedor'); 
      navigate('/dashboard');
    } else if (role === 'Cliente' && username === 'cliente' && password === 'cliente123') {
      setIsAuthenticated(true);
      setRole('Cliente'); 
      navigate('/dashboard');
    } else {
      setMessage('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Tipo de Usuario:</label>
          <select
            id="role"
            className="form-select"
            value={role}
            onChange={(e) => setLocalRole(e.target.value)}
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Vendedor">Vendedor</option>
            <option value="Cliente">Cliente</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
      </form>
      {message && <p className="text-danger text-center">{message}</p>}
    </div>
  );
};

export default Login;




