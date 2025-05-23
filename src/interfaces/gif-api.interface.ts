export interface GifApiInterface {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    }
  } 
}