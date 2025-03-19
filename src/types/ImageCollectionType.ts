import { StaticImageData } from "next/image";

interface ImageObject {
    image: StaticImageData;
    textAlt: string;
  }
  
type ImageCollectionType = Record<string, ImageObject>;

export default ImageCollectionType