'use client';

import React, {useState, useCallback} from "react";
import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from 'react-icons/fc'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";

const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name : '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then(()=> {
            registerModal.onClose();
        }).catch((e) => {
            console.log(e)
        })
        .finally(() => {
            setIsLoading(false);
        }) 
    }
 
const bodyContent = (
    <div className="
    flex
    flex-col
    gap-4
    ">
      <Heading
      title="Welcome to Airbnb"
      subtitle="Create an Account" />
    </div>
)




    return (
<Modal
disabled={isLoading}
isOpen={registerModal.isOpen}
title="Register"
actionLabel="Continue"
onClose={registerModal.onClose}
onSubmit={handleSubmit(onSubmit)}
/>
    )
}

export default RegisterModal; 