import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
function Signup() {
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
   <>
  <div className="flex h-screen items-center justify-center ">
     <div className="w-[90%] bg-darkbg text-white max-w-md border-none   shadow-lg rounded-lg p-12 relative">
 
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
     <Link to="/" className="  btn btn-sm btn-circle btn-ghost absolute right-2 top-2  ">✕</Link>

    
    <h3 className="font-bold text-lg">Signup</h3>

      {/* Name */}
    
    <div className="mt-4 space-y-2">
        <span>Name</span>
        
        <input type="name" placeholder='Enter your name' className="w-80 px-3 py-1 border rounded-md outline-none "
         defaultValue="" {...register("name")}
         {...register("name", { required: true })}
        
        />
        <br />
          {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        </div>

    {/* emial */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
        
        <input type="email" placeholder='Enter your email' className="w-80 px-3 py-1 border rounded-md outline-none "
         defaultValue="" {...register("email")}
         {...register("email", { required: true })}
        
        />
        <br />
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        
        
    </div> 

     {/* Password */}
    <div className="mt-4 space-y-2">
        <span>Password</span>
       
        <input type="pssword" placeholder='Enter Your password' className="w-80 px-3 py-1 border rounded-md outline-none " 
           defaultValue="" {...register("password")}
         {...register("password", { required: true })}
        
        />
        <br />
          {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        

    </div>   

    {/* Button */}
    <div className="flex justify-around mt-6">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300 cursor-pointer" >
            Login
        </button>

      <p>
  Have account?{" "}
  <Link to="/" className="underline text-blue-500 cursor-pointer">
    Login
  </Link>{" "}
</p>

        
    </div>

   </form>
  </div>
</div>
 
   </>
  )
}

export default Signup
