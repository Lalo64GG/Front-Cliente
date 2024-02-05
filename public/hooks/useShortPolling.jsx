import React, { useEffect, useState } from 'react';

export const useShortPolling = () => {
  const [clientesEnLinea, setClientesEnLinea] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:40001/clientes');
        const data = await response.json();
        setClientesEnLinea(data.clientesEnLinea );
      } catch (error) {
        console.error('Error al obtener datos de clientes en línea:', error);
      }
    };
    fetchData();


    const interval = setInterval(() => {
      fetchData();
    }, 3000);


    return () => clearInterval(interval);
  }, []);

  return clientesEnLinea;
};
