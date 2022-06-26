import React, { useState } from 'react'

import useIntersect from '../../hooks/useIntersect'

interface ImgProps {
 src: string
 alt: string
 lazy?: {
  placeholder: string
 }
}

function Img(props: ImgProps) {
 const { src, alt, lazy } = props
 const [imgSrc, setImgSrc] = useState(lazy ? lazy.placeholder : src)

 const [, setRef] = useIntersect({
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
   setImgSrc(src)
   observer.unobserve(entry.target)
  },
  option: {
   rootMargin: '0% 0% 0% 0%',
   threshold: 0,
  },
 })

 return <img src={imgSrc} alt={alt} ref={lazy ? setRef : null} />
}

export default Img
