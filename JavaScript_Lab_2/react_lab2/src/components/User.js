import { useForm } from 'react-hook-form'// Good to make think like 


import React from 'react'

const Form = () => {
    const { handleSubmit, register, formState: { errors }
    } = useForm({ defaultValues: { first_name: "John", last_name: "Smith", email: "JohnSmith@gmail.com" } })
    //register variable will handle tracking changes on the input fields
    return (

        <form onSubmit={handleSubmit((data) => {
            console.log(data.first_name)
        })}
        >

            <input
                {...register("first_name", {
                    required: "first_name is empty",
                    MaxLength: { value: 10, message: "Please enter a shorter first_name" }
                })}
                placeholder="first_name"
            />
            <p>{errors.first_name?.message}</p>
            <input
                {...register("last_name", {
                    required: "last_name is empty",
                    MaxLength: { value: 10, message: "Please enter a shorter first_name" }
                })}
                placeholder="last_name"
            />
            <p>{errors.first_name?.message}</p>
            <input
                {...register("email", {
                    required: "Email is empty",
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please enter a valid email address"
                    }
                })}
                placeholder="email"
            />
            <p>{errors.email?.message}</p>
            <input
                type="submit" />
        </form>
    )
}

export default Form

