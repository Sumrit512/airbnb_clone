import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Modal from "./Modal";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import {signIn} from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'
import { error } from "console";
import { useRouter } from "next/navigation";

const LoginModal =() => {
    const router = useRouter()
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

const toggle = useCallback(() => {
loginModal.onClose()
registerModal.onOpen()
},[loginModal, registerModal])

  const {
    register,
    handleSubmit,
    formState: {
        errors,
    }
  } = useForm<FieldValues>({ 
    defaultValues: {
        email: '',
        password: ''
    }
  })

  const footerContent = (
    <div className="
    flex 
    flex-col 
    gap-4 
    mt-3
    ">
<hr/>
<Button 
outline
label="Continue with Google"
icon={FcGoogle}
onClick={()=> signIn('google')}
/>

<Button 
outline
label="Continue with Github"
icon={AiFillGithub}
onClick={() => signIn('github')}
/>
<div 
className="
text-neutral-500
text-center
mt-4
font-light
"
>
<div className="
flex
flex-row
justify-center
gap-2
">
    <div> 
First time using Airbnb?
    </div>
  

<div className="
text-neutral-800
cursor-pointer
hover:underline
"
onClick={toggle}
>
  Create an Account
</div>
</div>
</div>

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
    ...data,
    redirect: false,
 })
 .then((callback) =>{
    setIsLoading(false)

    if(callback?.ok) {
        toast.success('Logged in')
        router.refresh();
        loginModal.onClose()
    }
    if(callback?.error) {
        toast.error(callback.error)
    }
 })
}


return( 
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Login"
    onClose={loginModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
        />
)
}

export default LoginModal;