import React,  { useState } from 'react'

interface SelectOption {
    label: string
    value: string
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void
    options?: SelectOption[]
    label?: string
}

const Select: React.FunctionComponent<SelectProps> = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        if (handler) {
            handler(option, optionIndex)
        }
    }

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }

    return <div>
        <button onClick={() => onLabelClick()}>
            {label}
        </button>

        {isOpen ? (
            <ul>
                {options.map((option, optionIndex) => {
                    return <li onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>{option.label}</li>
                })}
            </ul>
        ) : null}
    </div>
}

export default Select
