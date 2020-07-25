import React from 'react';
interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
}
declare const Select: React.FunctionComponent<SelectProps>;
export default Select;
