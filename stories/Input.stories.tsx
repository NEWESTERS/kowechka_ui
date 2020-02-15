import React, { useState } from 'react';

import { Input, Field } from '../src/components/Input';
import { UIContainer } from '../src/components/UIContainer';

export default {
	title: 'Input',
};

export const FieldStory = () => {
	return (
		<UIContainer style={{ width: 200 }}>
			<Field>Текстовое поле</Field>
		</UIContainer>
	);
};

export const InputStory = () => {
	const [value, setValue] = useState('Текстовое поле для ввода');

	return (
		<UIContainer style={{ width: 200 }}>
			<Input value={value} onChange={setValue} />
		</UIContainer>
	);
};

export const InputWithLabel = () => {
	const [value, setValue] = useState('');

	return (
		<UIContainer label="Текстовое поле для ввода" style={{ width: 200 }}>
			<Input value={value} onChange={setValue} />
		</UIContainer>
	);
};
