export default function Featured() {
  return (
    <div className="w-full max-w-screen-lg flex justify-center gap-20 ">
      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden ">
          <img
            src="https://i.ibb.co/z7fKhtW/depositphotos-359757290-stock-photo-kinshasa-congo-january-2020-view.jpg"
            alt="vile de kinshasa"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Kinshasa</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden">
          <img
            src="https://i.ibb.co/VqXPFKz/t-l-chargement.jpg"
            alt="ville de Lubumbashi"
            className="size-250"
          />
        </div>
        <div className="absolute top-5 text-white left-7 ">
          <h2>Lubumbashi</h2>
          <h3>5 properties</h3>
        </div>
      </div>

      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden">
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

      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden">
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

      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden">
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

      <div className="relative ">
        <div className="w-full object-cover rounded-md overflow-hidden">
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
