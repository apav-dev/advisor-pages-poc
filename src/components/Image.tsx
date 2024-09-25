import { ComponentConfig, Fields } from "@measured/puck";
import { cn } from "../utils/cn";

export interface ImageProps {
  url: string;
  alt?: string;
  className?: string;
}

const Image = ({ url, alt, className, ...props }: ImageProps) => {
  return (
    <img
      src={url}
      alt={alt}
      className={cn("max-w-full h-auto", className)}
      {...props}
    />
  );
};

type ImageBlockProps = Omit<ImageProps, "className">;

const imageFields: Fields<ImageBlockProps> = {
  url: { type: "text", label: "Image URL" },
  alt: { type: "text", label: "Alt Text" },
};

const ImageBlock: ComponentConfig<ImageBlockProps> = {
  fields: imageFields,
  defaultProps: {
    url: "https://placeholder.com/300x200",
    alt: "Placeholder image",
  },
  render: ({ url, alt }) => <Image url={url} alt={alt} />,
};

export { Image, ImageBlockProps, ImageBlock };
