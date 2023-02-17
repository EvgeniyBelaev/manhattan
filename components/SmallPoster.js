import Image from 'next/image'

export default function SmallPoster({img}) {
    return (
        <Image
            src={img}
            alt="Bar"
            width={160}
            height={200}
        />
    )
};
