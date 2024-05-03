import Hotel from "../components/hotel";
import datahotel from "../data/data.json";

export default function Hotels() {
  // const copyHotel = datahotel;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
      <div>
        <h2 className="text-center "> Nos differents hotels</h2>
      </div>
      <heroSection/>
      <div>
        {datahotel.map((item) => {
          <Hotel
            key={item.id}
            hotelImg={item.hotelImg}
            hotelName={item.hotelName}
            hotelPlace={item.hotelPlace}
            hotelAdress={item.hotelAdress}
          />;
        })}
      </div>
    </div>
  );
}
