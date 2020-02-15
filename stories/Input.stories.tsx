import React, { useState } from 'react';

import { Input, Field } from '../src/components/Input';

export default {
	title: 'Input',
};

export const FieldStory = () => {
	return <Field>Текстовое поле</Field>;
};

export const InputStory = () => {
	const [value, setValue] = useState('Текстовое поле для ввода');

	return <Input value={value} onChange={setValue} />;
};
