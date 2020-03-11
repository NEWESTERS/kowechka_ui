import React, { FunctionComponent } from 'react';
import { UIContainer } from '../src/components/UIContainer';
import MaskInput from '../src/components/MaskInput';
import { useState } from '@storybook/addons';

export default {
	title: 'Input Mask',
};

export const TabFilterStory: FunctionComponent<{}> = (props) => {

	const [value, setValue] = useState('');

	return (
		<UIContainer>
			<MaskInput mask={'999-999-99-99'} value={value} onChange={setValue} deleteString={() => setValue('')}/>
		</UIContainer>
	);
};

