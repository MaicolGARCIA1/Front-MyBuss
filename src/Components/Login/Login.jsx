import React, { useState } from 'react';
import'./Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!forgotPassword) {
      // Aquí podrías implementar la lógica para autenticar al usuario
      console.log('Email:', email, 'Password:', password);
      // Por ahora, solo imprime los datos en la consola
    } else {
      // Aquí podrías implementar la lógica para el restablecimiento de contraseña
      console.log('Email para restablecer contraseña:', email);
      // Por ahora, solo imprime el correo electrónico en la consola
    }
  };

  return (
    <div className="login-container">
      {!forgotPassword ? (
        <>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Ingresar</button>
            <p onClick={() => setForgotPassword(true)}>¿Olvidó su contraseña?</p>
          </form>
        </>
      ) : (
        <>
          <h2>Restablecer Contraseña</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Restablecer Contraseña</button>
            <p onClick={() => setForgotPassword(false)}>Volver al inicio de sesión</p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
