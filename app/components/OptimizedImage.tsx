"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded overflow-hidden"
          aria-hidden="true"
        />
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoading(false)}
        {...props}
        className={`${props.className || ""} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      />
    </div>
  )
}
