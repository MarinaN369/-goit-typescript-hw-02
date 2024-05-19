import axios, {AxiosResponse} from "axios";

interface ImageRequestParams {
  query?: string;
  page?: number;
}

interface ImageResponse {
  results: Image[];
  total: number;
  totalPages: number;
} 

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

type ImageRequestFunction = (params?: ImageRequestParams) => Promise<ImageResponse>;

const accessKey = "_mZUr46W-IwHQHrBu3O-0mxDGd-RkahEBnzsYab4ovk";
const apiUrl = "https://api.unsplash.com/";

export const requestImages: ImageRequestFunction = async () => {
    const { data }: AxiosResponse<ImageResponse> = await axios.get(
      `${apiUrl}/search/photos?client_id=${accessKey}`
    );
    return data;
  };
  
  export const requestImagesQuery: ImageRequestFunction = async (query, page = 1) => {
    const { data }: AxiosResponse<ImageResponse>  = await axios.get(
      `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
    );
    return data;
  };