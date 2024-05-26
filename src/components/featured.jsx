export default function Featured() {
  return (
    <div className="w-full max-w-screen-lg flex justify-between gap-20 z-1 ">
      <div className="relative text-white rounded-md overflow-hidden  ">
        <img
          src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1714762152/pexels-photo-7052280_xuhuzr.jpg"
          alt="vile de kinshasa"
          className="w-full object-cover h-96 "
        />
        <div className="absolute bottom-10  left-10 ">
          <h2>Kinshasa</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden ">
        <img
          src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1714813679/OIP_da7vow.jpg"
          alt="ville de Lubumbashi"
          className="w-full object-cover h-96"
        />

        <div className="absolute bottom-10  left-10 ">
          <h2>Lubumbashi</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden">
        <img
          src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1715091786/pexels-photo-169647_hmywza.jpg"
          alt="ville de bandundu"
          className="w-full object-cover h-96"
        />

        <div className="absolute bottom-10  left-10 ">
          <h2>Bandundu</h2>
          <h3>5 properties</h3>
        </div>
      </div>
    </div>
  );
}
