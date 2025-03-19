interface ImageObject {
    image: string;
    textAlt: string;
  }
  
type ImageCollectionType = Record<string, ImageObject>;

export default ImageCollectionType