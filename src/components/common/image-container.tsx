export const ImageContainer = ({ src }: { src?: string }) => {
  return (
    <img className="object-scale-down h-auto sm:h-full rounded-xl" src={src} />
  );
};
