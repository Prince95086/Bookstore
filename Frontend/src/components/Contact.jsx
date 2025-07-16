import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  


  return (
   <>
   <Navbar/>

    <div className="flex h-screen items-center justify-center md:mt-15">
       <div className="w-[90%] bg-darkbg text-white max-w-md border-none   shadow-lg rounded-lg p-12 relative">
   
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
       <Link to="/" className="  btn btn-sm btn-circle btn-ghost absolute right-2 top-2  ">✕</Link>
  
      
      <h3 className="font-bold text-lg">Contact Us</h3>
  
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
          <span>Message</span>
         
          <textarea type="message" placeholder='Type your message' className="w-80 h-30 px-3 py-1 border rounded-md outline-none " 
             defaultValue="" {...register("password")}
           {...register("password", { required: true })}
          
          />
          <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          
  
      </div>   
  
      {/* Button */}
      <div className=" mt-4">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300 cursor-pointer" >
             Submit
          </button>
  
       
  
          
      </div>
  
     </form>
    </div>
  </div>

  <Footer/>
   
     </>
    )
  }

export default Contact
