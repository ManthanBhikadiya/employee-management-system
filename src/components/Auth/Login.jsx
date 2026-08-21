import React, { useState } from 'react'

const Login = () => {

    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')


    const submitHndler = (e) => {
        e.preventDefault()
        console.log("email is",email);
        console.log("email is",password);
        alert(
            `email:${email}\nPassword:${password}`
        )

        setEmail('')
        setPassword('')
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center" >
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form
                onSubmit={(e)=>{
                    submitHndler(e)
                }}
                 className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full' type="email" placeholder='Enter your email'
                    />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-5 rounded-full mt-4' type="password" placeholder='Enter your Password'
                    />
                    <button className='text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 cursor-pointer w-full text-xl py-3 px-5 rounded-full mt-10' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login

