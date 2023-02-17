import Image from "next/image";

export default function GalleryItem({img}) {
    return (
        <Image
            src={img}
            alt='gallery'
            width={306}
            height={350}
        />
    )
};
