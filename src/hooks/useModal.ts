import { useAtom } from 'jotai'

import { modalAtom, ModalProps } from '../jotai/atoms/modalAtom'

export function useModal() {
 const [modal, setModal] = useAtom(modalAtom)

 const handleOpen = (props: Pick<ModalProps, 'children'>) => {
  setModal({ isOpen: true, children: props.children })
 }

 const handleClose = () => {
  setModal({ isOpen: false, children: null })
 }

 return {
  modal,
  handleOpen,
  handleClose,
 }
}
