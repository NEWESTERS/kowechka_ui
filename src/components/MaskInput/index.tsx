import React, {FunctionComponent, useEffect, useState} from 'react';
import ReactInputMask from "react-input-mask";
import './MaskInput.css'
import cross from "./close-gray.svg";

interface OwnProps {
    placeholder?: string,
    mask: string,
    value?: string,
    onClick?: (e: any) => any,
    onChange?: (e: any) => any,
    onBlur?: (e: any) => any,
    deleteString?: () => any,
    color?: string
}

type Props = OwnProps;

const MaskInput: FunctionComponent<Props> = (props) => {

    const { mask, value, onClick, onChange, color, placeholder, onBlur, deleteString } = props;

    const [_value, _setValue] = useState(value);

    useEffect(() => {
        _setValue(value)
    }, [value]);

    const handleBlur = (e: any) => {
        if (_value !== '' && onBlur) {
            onBlur(e);
        }
        else {
            _setValue(value)
        }
    };
    const handleChange = (e: any) => {
        _setValue(e.target.value);
        onChange && onChange(e);
    };

    return (
        <div className={'mask-input-wrapper'}>
            <ReactInputMask
                placeholder={placeholder}
                mask={mask}
                className={'MaskInput'}
                value={_value} onClick={onClick}
                onChange={handleChange}
                style={{ borderColor: color }}
                onBlur={handleBlur}
            />
            <img src={cross} onClick={() => {
                _setValue('');
                deleteString && deleteString();
            }}/>
        </div>
    );
};

export default MaskInput;
