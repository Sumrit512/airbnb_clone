import {create} from 'zustand'

interface LoginModalStore {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}
//zustand is like a store managemnent tool like redux toolkit

const useLoginModal = create<LoginModalStore>((set) => ({
   isOpen: false,
   onOpen: () =>set({isOpen: true}),
   onClose: () => set({isOpen: false})
})) 

export default useLoginModal;