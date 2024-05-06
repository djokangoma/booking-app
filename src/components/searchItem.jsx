/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function SearchItem() {
  return (
    <div className="p-2 rounded-md flex justify-between gap-5 mb-5 border border-indigo-600">
      <img
        src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1714937561/pexels-photo-2631746_jxesbo.jpg"
        alt="hotel golf"
        className=" w-40 h-40 object-cover "
      />
      <div className="flex flex-col gap-2 flex-2 ">
        <h1 className="fz-20">Hotel Golf Coast</h1>
        <span className="fz-12">Knshasa </span>
        <span>
          Situé à 6,6 km du musée Mbatu, l'Hotel Golf Coast propose des
          hébergements avec une salle de sport, un parking privé gratuit, un bar
          et un restaurant.
        </span>
      </div>
      <div className=" text-right flex flex-col gap-1">
        <span className="fz-24">$80</span>
        <button className="bg-[#191970] font-medium w-32 h-8 rounded-md border-none text-white cursor-pointer  ">
          see availability
        </button>
      </div>
    </div>
  );
}
