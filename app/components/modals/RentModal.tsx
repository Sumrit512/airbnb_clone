"use client";
import {useState} from 'react'
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}


const RentModal = () => {

    const [step, setStep] = useState(STEPS.CATEGORY)

const onBack = () => {
    setStep((value) => value - 1)
}

const onNext = () => {
    setStep((value) => value + 1)
}

    const rentModal = useRentModal()
    return (
    
    <Modal
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={rentModal.onClose}
    actionLabel="Submit"
    title="Airbnb your home"
    />
    )
}

export default RentModal;