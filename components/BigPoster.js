import Image from "next/image";

export default function BigPoster({img}) {
    return (
        <Image
            src={img}
            alt='img'
            width={306}
            height={350}
            
        />
    )
};
