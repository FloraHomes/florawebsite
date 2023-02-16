import { ReactPictureGrid } from "react-picture-grid";
import hospital from "../assets/portfolio/0.jpg";
import home from "../assets/portfolio/1.jpg";
import home2 from "../assets/portfolio/2.jpg";
import duplex from "../assets/portfolio/10.jpg";
import bedroom3 from "../assets/portfolio/12.jpg";
import service from "../assets/portfolio/7.jpg";
import floracity from "../assets/portfolio/8.jpg";
import scheme from "../assets/portfolio/9.jpg";
import scheme2 from "../assets/portfolio/13.jpg";

const PhotoGallery = () => {
  const data = [
    {
      image: hospital,
      title: "Hospital View",
      description: "Hospital aerial view by FloraHomes",
    },
    {
      image: home,
      title: "Home View",
      description: "Home Designed by FloraHomes",
    },
    {
      image: home2,
      title: "Home View",
      description: "Home Designed by FloraHomes",
    },
    {
      image: duplex,
      title: "3 Bedroom Duplex",
      description: "3 bedroom duplex July 2022 - Elevation - Approach Elevation",
    },
    {
        image: service,
        title: "3 bedroom duplex",
        description: "3 bedroom duplex July 2022 - Floor Plan - Ground Floor Plan",
      },
    {
        image: scheme,
        title: "3 bedroom duplex",
        description: "3 bedroom duplex July 2022 - Floor Plan - Ground Floor Plan",
      },
      {
        image: floracity,
        title: "Floracity",
        description: "floracity Ecopolis view designed by FloraHomes",
      },
      {
        image: bedroom3,
        title: "Home View",
        description: "Home Designed by FloraHomes",
      },
      {
        image: duplex,
        title: "3 Bedroom Duplex",
        description: "3 bedroom duplex July 2022 - Elevation - Approach Elevation",
      },
      {
        image: scheme2,
        title: "3 Bedroom Duplex",
        description: "3 bedroom duplex July 2022 - Elevation - Approach Elevation",
      },
  ];

  return (
    <>
      <ReactPictureGrid data={data} showPreview gap={10} />
    </>
  );
};

export default PhotoGallery;
