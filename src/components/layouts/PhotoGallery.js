import { ReactPictureGrid } from "react-picture-grid";

const PhotoGallery = ({data}) => {
  return (
    <>
      <ReactPictureGrid data={data} showPreview gap={10} />
    </>
  );
};

export default PhotoGallery;
