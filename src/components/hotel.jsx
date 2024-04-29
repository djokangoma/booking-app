
 export default function Hotel({
  hotelImg,
  hotelName,
  hotelPlace,
  hotelAdress
 }) {
   return (
     <div>
       <div>
         {hotelImg}
       </div>
       <h2>{hotelName} </h2>
       <h3>{hotelPlace} </h3>
       <p>{hotelAdress} </p>
     </div>
   )
 }
