import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
 id?: string
 children: React.ReactNode
}

function createWrapperAndAppend(id: string) {
 const $wrapper = document.createElement('div')
 $wrapper.setAttribute('id', id)
 const $root = document.querySelector('#root')
 $root?.appendChild($wrapper)

 return $wrapper
}

function Portal(props: IPortal) {
 const { id = '__portal', children } = props

 const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

 useLayoutEffect(() => {
  const element = document.getElementById(id) || createWrapperAndAppend(id)
  setWrapperElement(element)

  return () => {
   if (element) {
    element.parentNode?.removeChild(element)
   }
  }
 }, [id])

 if (wrapperElement === null) return null

 return createPortal(children, wrapperElement)
}

export default Portal
