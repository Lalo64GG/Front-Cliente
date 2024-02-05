import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const AuthContext = createContext();

// Creamos un proveedor para envolver toda nuestra aplicación
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const setAuthToken = (newToken) => {
        setToken(newToken);
    };

    return (
        <AuthContext.Provider value={{ token, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Función de ayuda para acceder al contexto
export const useAuth = () => useContext(AuthContext);
