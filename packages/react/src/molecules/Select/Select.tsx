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

    return <div className='dse-select'>
        <button className='dse-select__label' onClick={() => onLabelClick()}>
            <span>{label}</span>

            <svg width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
        </button>

        {isOpen ? (
            <ul className='dse-select__overlay'>
                {options.map((option, optionIndex) => {
                    return <li onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>{option.label}</li>
                })}
            </ul>
        ) : null}
    </div>
}

export default Select
