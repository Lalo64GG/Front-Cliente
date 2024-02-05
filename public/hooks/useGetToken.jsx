import React from 'react'

export const useGetToken = async(postData) => {
    try {
        const response = await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseData = await response.json()
        console.log("Respuesta: ", responseData);

       return responseData
    } catch (error) {
        console.log("Error", error);
    }
}
