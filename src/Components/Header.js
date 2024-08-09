import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (

<div class=" top-0 left-0 z-50 w-full h-16 bg-[#d96846]">
<div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
    <Link to={"/"} class="inline-flex flex-col items-center justify-center group text-white hover:text-[#596235]"><i class="fa-solid fa-house"></i> Home</Link>
    <Link to={"/About"} class="inline-flex flex-col items-center justify-center group text-white hover:text-[#596235]"><i class="fa-solid fa-address-card"></i> About</Link>
    <Link to={"/Projects"} class="inline-flex flex-col items-center justify-center group text-white hover:text-[#596235]"><i class="fa-solid fa-diagram-project"></i> Projects</Link>
    <Link to={"/Resume"} class="inline-flex flex-col items-center justify-center group text-white hover:text-[#596235]"><i class="fa-solid fa-file"></i> Resume</Link>
</div>
</div>
  )
}
