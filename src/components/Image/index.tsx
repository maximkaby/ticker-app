import React, {useRef} from 'react';
import NoImageIcon from "assets/icons/no-image.png";

interface ImageProps {
  src?: string,
  className?: string,
}

const Image: React.FC<ImageProps> = (props) => {
  const ref = useRef<HTMLImageElement>(null);
  const onErrorImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = NoImageIcon;
  }

  return (
    <img
      {...props}
      ref={ref}
      alt=""
      onError={onErrorImage}
    />
  );
}

export default Image;