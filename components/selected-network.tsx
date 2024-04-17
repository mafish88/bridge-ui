import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

export type SelectedNetworkProps = {
  title?: string;
  image: ImageProps;
  name: string | null;
};

export const SelectedNetwork = ({
  image,
  name,
  title,
}: SelectedNetworkProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {title && <p className="text-sm">{title}</p>}

      <div className="flex gap-4 items-center justify-start">
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
        {name && <p>{name}</p>}
      </div>
    </div>
  );
};
