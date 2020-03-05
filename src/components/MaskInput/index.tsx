import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import './MaskInput.css';
import cross from './close-gray.svg';

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
	const [_value, _setValue] = useState(value || '');
	const inputEl = useRef(null);

	//todo need bugfix
	const maskStencil = (value: string) => {
		let _mask = mask.replace(/9/g, '_').split('');
		let valueArr = value.replace(/\D/g, '').split('');
		for (let i = 0; i < _mask.length; i++) {
			if (_mask[i] == '_') {
				_mask[i] = valueArr.shift() || '_';
			}
		}
		return _mask.join('');
	};


	useEffect(() => {
		_setValue(value || '');
	}, [value]);

	const handleBlur = (e: any) => {
		if (_value !== '') {
			onBlur && onBlur(e);
		}
		else {
			_setValue(value || '');
		}
	};
	const handleChange = (e: any) => {
		_setValue(e.target.value.replace(/\D/g, ''));
		console.log(_value);
		onChange && onChange(e);
	};

	return (
		<div className={'mask-input-wrapper'}>
			<input
				ref={inputEl}
				type={'text'}
				placeholder={placeholder}
				className={'MaskInput'}
				value={maskStencil(_value).toString()}
				onClick={onClick}
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
