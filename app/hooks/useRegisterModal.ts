 import {create} from 'zustand'

 interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
 }
 //zustand is like a store managemnent tool like redux toolkit

 const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () =>set({isOpen: true}),
    onClose: () => set({isOpen: false})
 }))

 export default useRegisterModal;