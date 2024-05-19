import css from "./ImageCard.module.css";

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
    full: string;
  };
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
} 

const ImageCard = ({image, onClick}:ImageCardProps) => { const handleClick = () => {onClick(image);}; return (<div className={css.card}> 
    <img 
     src={image.urls.small} 
    alt={image.alt_description}
    onClick = {handleClick}
    className={css.image} />
  </div>)};

  export default ImageCard;
