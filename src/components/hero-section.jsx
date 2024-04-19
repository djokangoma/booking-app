

export default function HeroSection() {
  return (
   <div>
    <div> <img src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1713536297/xlpp4gqbjbteygvx2olk.jpg" alt="hero-image" /> </div>
    <div className="flex justify-between  w-30px h-28 bg-[#FAF9F5] ">
        <div className=" ">
          <h2>PLACE</h2>
          <input type="text" className="block text-gray-900 focus:" placeholder="where are you going?" /> 
        </div>
        <div >
        <button  className="text-[#4d4d4d] border-2  w-40 h-12 ">where are you going?</button>
        </div>
        <div>
          <h2>ROOMS</h2>
          <button></button>
        </div>
        <div>
          <h2>GUESTS</h2>
          <button></button>
        </div>
        <div>
          
          <button className="w-32 border-2 border-neutral-900">BOOK NOW</button>
        </div>

        
    </div>
   </div>
  )
}
