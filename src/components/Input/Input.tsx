import React, { FC, ChangeEvent } from 'react';

import Field from './Field';
import './Input.scss';

interface IProps {
	value: string;
	onChange: (value: string) => void;
}

const Input: FC<IProps> = props => {
	const { value, onChange } = props;

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};

	return (
		<Field>
			<input type="text" value={value} onChange={handleInputChange} />
		</Field>
	);
};

export default Input;
