

export default function HeroSection() {
  return (
   <div className="relative">
    
     <div >
       <img src="https://i.ibb.co/34xMXZn/hero-img.jpg" alt="hero-image"  className="w-full h-49"  /> 
      </div>

      <div className="flex  justify-around w-11/12 h-28 bg-[#FAF9F5] absolute bottom-0 ">
        
        <div>
          <h2>PLACE</h2>
          <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="where are you going?" /> 
        </div>

        <div >
        <h2>DATE</h2>
        <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="where are you going?" />
        
        </div>
        <div>
          <h2>ROOMS</h2>
          <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="where are you going?" />
        </div>
        <div>
          <h2>GUESTS</h2>
          <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="where are you going?" />
        </div>
        <div>
          
          <button className="mt-1 px-3 py-2 bg-white border m-20">BOOK NOW</button>
        </div>

        
    </div>
   </div>
  )
}
