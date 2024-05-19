import css from "./App.module.css";
import {useState, useEffect} from "react";
import { requestImagesQuery } from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

interface Modal{
  imageSrc: string;
  imageAltDescription: string;
  imageDescription: string;
  imageAuthor: string;
  imageLikes: number;
}

function App() {
  const [images, setImages] = useState<any[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalData, setModalData] = useState<Modal>({
    imageSrc: "",
    imageAltDescription: "",
    imageDescription: "",
    imageAuthor: "",
    imageLikes: 0,
    });

  useEffect (() => { async function fetchImagesQuery(query: string, page: number): Promise<void> {try {
    setLoader(true);
    const info = await requestImagesQuery(query, page);
    if(page===1) {setImages(info.results);}
  
else {setImages((prevImages) => [...prevImages, ...info.results]);}
setError(false);
}catch (error) {setError(true);} finally {setLoader(false);}
}

if (query.length > 0) {
  fetchImagesQuery();
} else {
  setImages(null); 
}
}, [query, page]);

const onSearchQuery = (searchQuery: string):void => { setQuery(searchQuery);
setPage(1);
};
const handleMoreImages = ():void => {
  setPage((prevPage) => prevPage + 1);
};


const openModal = (imageUrl: string):void => {setModalIsOpen(true);
  setSelectedImage(imageUrl);}

  const closeModal = ():void => {
    setModalIsOpen(false);
    setSelectedImage(null);


  }

    return (
        <div className={css.container}>
          <SearchBar onSubmit={onSearchQuery} />
          {loader && <Loader/>}
          {error && <ErrorMessage/>}
          {images && <ImageGallery images={images} onImageClick={openModal}/>}
          {images && <LoadMoreBtn onClick={handleMoreImages}/>}
          <ImageModal
          isOpen={modalIsOpen}
          // isOpen={!!selectedImage}
          image={selectedImage}
          onClose={closeModal}/>
        </div>
      );
}
    
    
    export default App;
