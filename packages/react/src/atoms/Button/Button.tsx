import React from 'react'

interface ButtonProps {
    label: string
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
    return <button className='dse-button-container'>{label || 'Button'} - LABEL HERE</button>
}

export default Button
