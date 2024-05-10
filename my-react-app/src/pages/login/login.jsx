import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthContext';
import { ROUTES } from '../../routes';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'admin@admin.com' && password === 'admin') {
            // Autenticación exitosa
            dispatch({ type: 'LOGIN' });

            // Establecer la cookie de inicio de sesión
            document.cookie = 'isLoggedIn=true';

            // Redireccionar a la página de inicio
            navigate(ROUTES.HOME.path, { replace: true });
        } else {
            // Credenciales incorrectas
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            {state.isAuthenticated ? (
                <h1>Login</h1>
            ) : (
                <div>
                    <form>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='button' onClick={handleLogin}>Iniciar sesión</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
