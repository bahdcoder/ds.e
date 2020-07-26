import React,  { useState, useRef, useEffect, KeyboardEventHandler, createRef } from 'react'

import Text from '../../atoms/Text'

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40
}

interface SelectOption {
    label: string
    value: string
}

interface RenderOptionProps  {
    isSelected: boolean
    option: SelectOption
    getOptionRecommendedProps: (overrideProps?: Object) => Object
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void
    options?: SelectOption[]
    label?: string
    renderOption?: (props: RenderOptionProps) => React.ReactNode
}

const Select: React.FunctionComponent<SelectProps> = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler, renderOption }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<null|number>(null)
    const [highlightedIndex, setHighlightedIndex] = useState<null|number>(null)
    const labelRef = useRef<HTMLButtonElement>(null);
    const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);
    const [overlayTop, setOverlayTop] = useState<number>(0)

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        if (handler) {
            handler(option, optionIndex)
        }

        setSelectedIndex(optionIndex)
        setIsOpen(false)
    }

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setOverlayTop((
            labelRef.current?.offsetHeight || 0
        ) + 10)
    }, [labelRef.current?.offsetHeight])

    let selectedOption = null

    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex]
    }

    const highlightItem = (optionIndex: number|null) => {
        setHighlightedIndex(optionIndex)
    }

    const onButtonKeyDown: KeyboardEventHandler = (event) => {
        event.preventDefault()

        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true)

            // set focus on the list item
            highlightItem(0)
        }
    }

    useEffect(() => {
        setOptionRefs(options.map(_ => createRef<HTMLLIElement>()))
    }, [options.length])

    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex]

            if (ref && ref.current) {
                ref.current.focus()
            }
        }
    }, [isOpen])

    return <div className='dse-select'>
        <button onKeyDown={onButtonKeyDown} aria-controls='dse-select-list' aria-haspopup={true} aria-expanded={isOpen ? true: undefined} ref={labelRef} className='dse-select__label' onClick={() => onLabelClick()}>
            <Text>{selectedOption === null ? label : selectedOption.label}</Text>

            <svg className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`} width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
        </button>

        {isOpen ? (
            <ul role='menu' aria-hidden={isOpen ? undefined : false} id='dse-select-list' style={{ top: overlayTop }} className='dse-select__overlay'>
                {options.map((option, optionIndex) => {
                    const isSelected = selectedIndex === optionIndex
                    const isHighlighted = highlightedIndex === optionIndex

                    const ref = optionRefs[optionIndex]

                    const renderOptionProps = {
                        ref,
                        option,
                        isSelected,
                        getOptionRecommendedProps: (overrideProps = {}) => {return {
                            ref,
                            tabIndex: isHighlighted ? -1 : 0,
                            onMouseEnter: () => highlightItem(optionIndex),
                            onMouseLeave: () => highlightItem(null),
                            className: `dse-select__option
                                ${isSelected ? 'dse-select__option--selected' : ''}
                                ${isHighlighted ? 'dse-select__option--highlighted' : ''}
                            `,
                            key: option.value,
                            onClick: () => onOptionSelected(option, optionIndex),
                            ...overrideProps
                        }}
                    }

                    if (renderOption) {
                        return renderOption(renderOptionProps)
                    }
    
                    return <li
                        {...renderOptionProps.getOptionRecommendedProps()}
                        >
                            <Text>
                                {option.label}
                            </Text>

                            {isSelected ? (
                                <svg width='1rem' height='1rem' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                            ) : null}
                        </li>
                })}
            </ul>
        ) : null}
    </div>
}

export default Select
