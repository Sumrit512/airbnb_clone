import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import {signIn} from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'
import { error } from "console";

const LoginModal =() => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
        errors,
    }
  } = useForm<FieldValues>({ 
    defaultValues: {
        name: '',
        password: ''
    }
  })

  const footerContent = (
    <div>

    </div>
  )

const bodyContent = (
    <div className="
    flex
    flex-col
    gap-4
    ">
    <Heading
    title="Welcom Back"
    subtitle="Login to your account"
    />
    <Input
    id="email"
    label="Email"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    <Input 
    id="password"
    type="password"
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    </div>
)

const onSubmit: SubmitHandler<FieldValues> = (data) => {
 signIn('credentials', {
    ... data
 })
}


return( 
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Login"
    onClose={loginModal.onClose}
    onSubmit={handleSubmit()}
    body={bodyContent}
    footer={footerContent}
        />
)
}

export default LoginModal;