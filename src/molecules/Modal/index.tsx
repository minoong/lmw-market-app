/* eslint-disable simple-import-sort/imports */
import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'

import { keyframes } from '@emotion/css'
import Portal from '../../components/common/Portal'
import { useModal } from '../../hooks/useModal'
import { modalAtom } from '../../jotai/atoms/modalAtom'

const toastAnimation = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0px);
    }
`
const ModalWrapper = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
 height: 100%;
 width: 100%;
 background: black;
 opacity: 0.75;
 z-index: 989898;
`

const ModalContents = styled.div`
 position: fixed;
 background: white;
 min-height: 250px;
 width: 100%;
 z-index: 999999;
 bottom: 0px;
 border-top-left-radius: 1rem;
 border-top-right-radius: 1rem;
 animation: ${toastAnimation} 0.7s ease;
 padding: 1.765rem;
`

function Modal() {
 const modalValue = useAtomValue(modalAtom)
 const { handleClose } = useModal()

 const onClickClose = modalValue.handleClose || handleClose

 useEffect(() => {
  const handleCloseOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' && onClickClose()

  document.body.addEventListener('keydown', handleCloseOnEscapeKey)

  return () => document.body.removeEventListener('keydown', handleCloseOnEscapeKey)
 }, [onClickClose])

 return (
  <Portal>
   {modalValue.isOpen && (
    <div>
     <ModalWrapper onClick={handleClose} />
     <ModalContents>{modalValue.children}</ModalContents>
    </div>
   )}
  </Portal>
 )
}

export default Modal
