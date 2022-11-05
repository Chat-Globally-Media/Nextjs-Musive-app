import React from "react";
import Image from "next/image";
import { useState } from "react";

function CustomImage({ src, className }: any) {
  const [isError, setError] = useState(false);
  return !isError ? (
    <Image
      src={src}
      alt="img"
      onError={() => {
        setError(true);
      }}
      className={className}
      layout="fill"
      objectFit="cover"
    />
  ) : null;
}

export default CustomImage;
