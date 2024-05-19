import Modal from "react-modal";
import css from "./ImageModal.module.css";

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

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const baseStyles: Modal.Styles = {
    content: {
      padding: "0",
      background: "unset",
      overflow: "unset",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const ImageModal: React.FC<ImageModalProps>  = ({image, isOpen, onClose}) => {if(!image) { return null} return (<div>
    <Modal
    style={baseStyles}
    isOpen={isOpen}
    onRequestClose={onClose}
    className={css.imageModal}
    overlayClassName={css.overlay}
    appElement={document.getElementById("root")}
    >
    <img src ={image.urls.regular} alt = {image.alt_description}/>
    </Modal>
    </div>);
    };

export default ImageModal;