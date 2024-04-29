import css from "./App.module.css";
import {useState, useEffect} from "react";
import { requestImagesQuery } from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";


function App() {
  const [images, setImages] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect (() => { async function fetchImagesQuery() {try {
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

const onSearchQuery = (searchQuery) => setQuery(searchQuery);
setPage(1);

const handleMoreImages = async () => {
  setPage((prevPage) => prevPage + 1);
};


const openModal = (imageUrl) => {setModalIsOpen(true);
  setSelectedImage(imageUrl);}

  const closeModal = () => {
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
