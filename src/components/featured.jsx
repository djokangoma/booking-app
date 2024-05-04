export default function Featured() {
  return (
    <div className="w-full max-w-screen-lg flex justify-between gap-20 z-1 ">
      <div className="relative text-white rounded-md overflow-hidden  ">
        <div className="w-full object-cover h-96 ">
          <img
            src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1714762152/pexels-photo-7052280_xuhuzr.jpg"
            alt="vile de kinshasa"
          />
        </div>
        <div className="absolute top-5  left-7 ">
          <h2>Kinshasa</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden ">
        <div className="w-full object-cover h-96 ">
          <img
            src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1714813679/OIP_da7vow.jpg"
            alt="ville de Lubumbashi"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Lubumbashi</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden">
        <div className="w-full object-cover h-96">
          <img
            src="https://i.ibb.co/bLfzkNn/t-l-chargement.jpg"
            alt="ville de bandundu"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Bandundu</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden ">
        <div className="w-full object-cover h-96">
          <img
            src="https://i.ibb.co/fFd5CM2/t-l-chargement-2.jpg"
            alt="ville de Matadi"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Matadi</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden">
        <div className="w-full object-cover h-96">
          <img
            src="https://i.ibb.co/hZkh2ZS/t-l-chargement.jpg"
            alt=" ville de Bukavu"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Bukavu</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative text-white rounded-md overflow-hidden">
        <div className="w-full object-cover h-96">
          <img
            src="https://i.ibb.co/Yfj95Tf/t-l-chargement-1.jpg"
            alt="ville de Goma"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Goma</h2>
          <h3>5 properties</h3>
        </div>
      </div>
    </div>
  );
}
