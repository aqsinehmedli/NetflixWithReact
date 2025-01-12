import React from 'react'
import { useState, useEffect } from 'react'
import FormInput from 'common/FormInput'
import Login from '../pages/login/Login'
const Form = ({ headerText, setFormData, formItems, formButtons, formStyle = "flex flex-col gap-5  max-w-[400px] mx-auto pt-12" }) => {
    const handleInputChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }
    return (
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className={formStyle}>
                {headerText && <h1 className={headerText.style}>{headerText.title}</h1>}
                {
                    formItems.map(item => <FormInput name={item.name} placeholder={item.placeholder} type={item.type} handleInputChange={handleInputChange} inputStyle={item.inputStyle} />)
                }
                {
                    formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
                }
            </form>
    )
}

export default Form