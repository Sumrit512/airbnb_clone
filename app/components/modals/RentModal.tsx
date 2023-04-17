"use client";
import {useMemo, useState} from 'react'
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import Heading from '../Heading';

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

const actionLabel = useMemo(() => {
if( step === STEPS.PRICE) {
    return 'Create';
}

return 'Next';

}, [step])

const secondaryActionLabel = useMemo(() => {
    if(step === STEPS.CATEGORY) {
        return undefined;
    }
    return 'Back';

}, [step])

let bodyContent = (
    <div>
        <Heading 
        title='which of these best describes your place?'
        subtitle='Pick a category'
        />
    </div>
)

    const rentModal = useRentModal()
    return (
    
    <Modal 
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={rentModal.onClose}
    actionLabel={actionLabel} 
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={stepp === STEPS.CATEGORY? undefined : onBack }
    title="Airbnb your home"
    body={bodyContent}
    />
    )
}

export default RentModal;