import React, { FunctionComponent, useState } from 'react';
import './MaskInput.css';
import cross from './close-gray.svg';

interface OwnProps {
	placeholder?: string,
	mask: string,
	value: string,
	onClick?: (e: any) => any,
	onChange?: (e: any) => any,
	onBlur?: (e: any) => any,
	deleteString?: () => any,
}

type Props = OwnProps;

const MaskInput: FunctionComponent<Props> = (props) => {

	const { mask, value, onClick, onChange, placeholder, onBlur, deleteString } = props;

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

	//
	// useEffect(() => {
	// 	_setValue(value || '');
	// }, [value]);

	const handleBlur = (e: any) => {
			onBlur && onBlur(e.target.value);
	};
	const handleChange = (e: any) => {
		onChange && onChange(e.target.value);
	};

	return (
		<div className='mask-input-wrapper'>
			<input
				type='text'
				placeholder={placeholder}
				className='mask-input'
				value={maskStencil(value)}
				onClick={onClick}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<img src={cross} onClick={() => {
				deleteString && deleteString();
			}}/>
		</div>
	);
};

export default MaskInput;
