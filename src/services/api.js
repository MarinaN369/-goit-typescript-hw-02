import axios from "axios";

const accessKey = "_mZUr46W-IwHQHrBu3O-0mxDGd-RkahEBnzsYab4ovk";
const apiUrl = "https://api.unsplash.com/";

export const requestImages = async () => {
    const { data } = await axios.get(
      `${apiUrl}/search/photos?client_id=${accessKey}`
    );
    return data;
  };
  
  export const requestImagesQuery = async (query = "", page = 1) => {
    const { data } = await axios.get(
      `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
    );
    return data;
  };