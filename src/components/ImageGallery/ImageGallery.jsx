import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";



const ImageGallery = ({images, onImageClick}) => {return (
<div className={css.galleryImage}>
<ul className={css.galleryList}>
    {Array.isArray(images) && images.map((image) => (<li key={image.id}><ImageCard image={image} onClick ={() => onImageClick(image)}/></li>))}		
</ul>
</div>
);
};

export default ImageGallery;

