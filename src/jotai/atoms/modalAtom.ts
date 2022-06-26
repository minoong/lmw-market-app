import { atom } from 'jotai'

export interface ModalProps {
 isOpen: boolean
 handleClose?: () => void
 children?: React.ReactNode
}

const initialValue: ModalProps = {
 isOpen: false,
}

export const modalAtom = atom<ModalProps>(initialValue)
