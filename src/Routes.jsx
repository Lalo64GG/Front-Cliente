import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { Error } from '../Atoms/Error,'

export const Formulario = () => {

    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const navigate = useNavigate()

    const emailValidation = () => {
        if ([email, password].includes('')) {
            setError(true)
            setErrorMessage("Datos vacios")
            return;
        }

        setError(false)

        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

        if (!regex.test(email)) {
            setError(true)
            setErrorMessage("Email no valido")
            return;
        }

        if (!(email === "administrador@gmail.com" && password === "12345")) {
            setError(true)
            setErrorMessage("Correo o contraseña invalida")
            return;
        }
       

        navigate('/administrador/agregar')

    }

 

    const redirectToSignUp = () => {
        navigate('/home')
    }

  return (
    
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className=' font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details</p>
        { error &&
            <Error>
                <p>{errorMessage}</p>
            </Error>
        }
        <div className=' mt-8'>
            <div>
                <label className='text-lg font-medium'> Email</label>
                <input 
                    type="email"
                    className=' w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your email' 
                    onChange={ (e) => setEmail(e.target.value) }
                />
            </div>

            <div>
                <label> Password</label>
                <input 
                    type="password"
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your password'
                    onChange={ (e) => setPassword(e.target.value) }
                />
            </div>

            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input 
                        type="checkbox" 
                        id='remember'
                    />
                    <label className='mt-2 font-medium text-base' htmlFor="remember"> Remember for 30 days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot password</button>
            </div>

            <div className='mt-8 flex flex-col gpa-y-4'>
                <button className=' py-3 rounded-xl bg-violet-500 text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out' onClick={ emailValidation }>Sign in</button>
                <button className='font-medium text-base text-violet-500 mt-2 ' onClick={redirectToSignUp}>I don't have count</button>
            </div>

        </div>
    </div>

  )
}