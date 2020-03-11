import React, { FunctionComponent } from 'react';
import { UIContainer } from '../src/components/UIContainer';
import MaskInput from '../src/components/MaskInput';

export default {
	title: 'Input Mask',
};

export const TabFilterStory: FunctionComponent<{}> = (props) => {

	return (
		<UIContainer>
			<MaskInput mask={'999-999-99-99'}/>
		</UIContainer>
	);
};

