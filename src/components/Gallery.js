import React from "react";
import gallery1 from "../Images/gallery1.jpg";
import gallery2 from "../Images/gallery2.jpg";
import gallery3 from "../Images/gallery3.jpg";
import gallery4 from "../Images/gallery4.jpg";
import gallery5 from "../Images/gallery5.jpg";
import gallery6 from "../Images/gallery6.jpg";
import gallery7 from "../Images/gallery7.jpg";
import gallery8 from "../Images/gallery8.jpg";
// ... import other images

// const galleryData = [
//   {
//     backgroundImage: gallery1,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//     unHide: true
//   },
//   {
//     backgroundImage: gallery2,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery3,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery4,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery5,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery6,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery7,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery8,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery1,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery2,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery1,
//     title: "Marathon - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
//   {
//     backgroundImage: gallery2,
//     title: "CrossFit - 27/08/2023 - 14:00 PM IST",
//     venue: "Venue: Location",
//   },
// ];

function Gallery(props) {
  const galleryData = props.gallery
  return (
    <div className="h-auto w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
        <div className="flex justify-center items-center h-[25vh] xl:h-[40vh] w-full bg-pink-900">
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-center mx-auto text-white font-bannerFont2'>
              Glimpses Of Events
            </h1>
            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[50%]"></div>
          </div>
        </div>
      {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-[25vh] xl:h-[40vh] w-full"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#110e0e9d] opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-center ">
              <p className="text-white text-center mx-auto text-xl mt-[25%]">{item.heading} - {item.time}</p>
              <p className="text-white text-center mx-auto text-xl mt-4">Venue - {item.venue}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Gallery;
