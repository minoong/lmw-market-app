import React, { useCallback, useEffect, useState } from 'react'

interface OptionProps {
 root?: HTMLElement | null
 threshold?: number
 rootMargin: string
}

interface IProps {
 onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
 option: OptionProps
}

const baseOption: OptionProps = {
 root: null,
 threshold: 0.5,
 rootMargin: '0px',
}

export default function useIntersect(
 props: IProps,
): [HTMLElement | null, React.Dispatch<React.SetStateAction<HTMLElement | null>>] {
 const { onIntersect, option } = props
 const [ref, setRef] = useState<HTMLElement | null>(null)
 const checkIntersect = useCallback(
  ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
   if (entry.isIntersecting) {
    onIntersect(entry, observer)
   }
  },
  [onIntersect],
 )

 useEffect(() => {
  let observer: IntersectionObserver
  if (ref) {
   observer = new IntersectionObserver(checkIntersect, {
    ...baseOption,
    ...option,
   })
   observer.observe(ref)
  }

  return (): void => observer && observer.disconnect()
 }, [ref, option.root, option.threshold, option.rootMargin, checkIntersect, option])

 return [ref, setRef]
}
