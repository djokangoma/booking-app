

export default function HeroSection() {
  return (
   <div>
    
     <div>
       <img src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1713536297/xlpp4gqbjbteygvx2olk.jpg" alt="hero-image" /> 
      </div>

      <div className="flex justify-between  w-30px h-28 bg-[#FAF9F5] ">
        
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
          
          <button className="w-32 border-2 border-neutral-900">BOOK NOW</button>
        </div>

        
    </div>
   </div>
  )
}
