import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
    <div className="p-14 bg-black">
    <div className=" text-white text-center text-5xl font-serif hover:text-orange-400">About Us</div>
   </div>
   <div className="name">
   <button type="button" class="btn btn-primary mx-44 -mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Team
</button>
   <ul className="w-80% h-80% flex -mx-28 -my-20 -mt-96">
      <li className="pt-5 -mt-4  pb-28 mt-10  p-3 rounded-lg text-orange-400 mb-5 bg-white text-center text-2xl  hover:bg-slate-600">
     
       <p className=" font-serif text-xl border-b-2">Welcome to our about page</p>
      <p className=" font-serif text-lg text-slate-400 pb-8">This project is developed by using react application and node js.This is simple student marks management website in which the student view theier marks and attendence.</p>
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 px-40" id="exampleModalLabel">Team members</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>Details:</h1>
        <pre>

          -----------------------------
         <p> J.Venkatesh       2100032371</p>
          
          -----------------------------
          <p>P.Manoj           2100032430</p>
          
          -----------------------------<p>T.Veer Reddy         2100032453</p>
          -----------------------------
        </pre>
       </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      
      
    </div>
  </div>
</div>

  
      </li>
      </ul>
      
    </div>
   

  
   </>
  )
}