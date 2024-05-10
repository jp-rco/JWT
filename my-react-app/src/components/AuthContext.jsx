import React, { createContext, useReducer, useEffect } from 'react';

// Reducer para gestionar el estado de autenticación
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

// Crear el contexto
const AuthContext = createContext();

// Proveedor de contexto
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { isAuthenticated: localStorage.getItem('isLoggedIn') === 'true', });

    useEffect(() => {
        if (state.isAuthenticated) {
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            localStorage.removeItem('isLoggedIn');
        }
    }, [state.isAuthenticated]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
