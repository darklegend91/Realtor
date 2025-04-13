import React from 'react'
import { FcGoogle } from "react-icons/fc";

function Oauth() {
  return (
    <button type="submit" className=" flex justify-center items-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium upppercase rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900 mt-3">
        <FcGoogle className='text-2xl mr-2'/>
        Continue With Google
        </button>
  )
}

export default Oauth
