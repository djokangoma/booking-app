/* eslint-disable react/prop-types */

export default function Hotel({
  hotelImg,
  hotelName,
  hotelPlace,
  hotelAdress,
}) {
  return (
    <div className="size-16">
      <div>img src={hotelImg}</div>
      <h2>{hotelName} </h2>
      <h3>{hotelPlace} </h3>
      <p>{hotelAdress} </p>
    </div>
  );
}
