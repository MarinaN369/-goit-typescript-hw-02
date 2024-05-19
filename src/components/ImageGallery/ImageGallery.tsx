import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  description: string;
  user: {
    name: string;
  };
  likes: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <div className={css.galleryImage}>
      <ul className={css.galleryList}>
        {Array.isArray(images) &&
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

