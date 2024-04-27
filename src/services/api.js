import axios from "axios";

const accessKey = "_mZUr46W-IwHQHrBu3O-0mxDGd-RkahEBnzsYab4ovk";
const apiUrl = "https://api.unsplash.com/";

export const queryImages = async () =>  {const {info} = await axios.get(`${apiUrl}/search/photos?client_id=${accessKey}`); return info;};

export const requestImagesQuery = async (query = "", page = 1) => {const {info} = await axios.get(`${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`); return info}

queryImages()
  .then(response => {
    console.log("Результаты запроса queryImages:", response);
  })
  .catch(error => {
    console.error("Ошибка при выполнении запроса queryImages:", error);
  });