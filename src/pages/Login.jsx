import React from 'react'

const Login = () => {
  return (
    <main>
      <section className='bg-gray-100 min-h-screen flex item center justify center'>

        <div className='bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 justify-evenly align-center'>
          
          <div className='md:w-1/2 px-16'>
            <h2 className='text-2xl font-bold text-[#F19E22]'>Login</h2>
            <p className='text-sm mt-4'>If you already have an account, then please login</p>

            <form className='flex flex-col gap-4 items-center' action="">
              <input className='p-2 mt-8 rounded-xl border' type="email" name="email" id="email" placeholder='Email Adress' />

              <div className='relative'>
                <input className='p-2 rounded-xl border w-full' type="password" name="password" id="password" placeholder='Password' />

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-[40%] right-3 -transalate-y-1/2" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
              </div>


              <button className='bg-[#F19E22] py-2 rounded-xl hover:scale-110 duration-300 w-full'>Login</button>
            </form>

            <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
              <hr className='outline-gray-500'/>
              <p className='text-center'>OR</p>
              <hr className='outline-gray-500'/>
            </div>

            <div className='mt-5 text-sm border-b py-4'>
             <p>Forgot your password?</p>
            </div>

            <div className='mt-3 text-sm flex justify-between items-center'>
              <p>Don't have an account?</p>
              <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>Register</button>
            </div>
          </div>

          <div className='md:block hidden w-1/2'>
            <img className=' rounded-2xl' src="/Logo.png" alt="" />
          </div>

        </div>


      </section>
    </main>
  )
}

export default Login