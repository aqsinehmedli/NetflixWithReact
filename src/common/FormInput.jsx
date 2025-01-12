import React from 'react'

const FormInput = ({label,type,placeholder,svg,name,handleInputChange,inputStyle='border p-2 text-white'}) => {
  return (
    <div className='flex flex-col'>
        {label && <label htmlFor={name}>{label}</label>}
            <input onChange={(e) => {
            handleInputChange(e.target.name,e.target.value)
            
        }} type={type} name={name} placeholder={placeholder} className={`pl-10 ${inputStyle}`} />
    </div>
  )
}

export default FormInput