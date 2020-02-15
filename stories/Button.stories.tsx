import React, { useState } from 'react';

import { Button } from '../src/components/Button';
import { UIContainer } from '../src/components/UIContainer';

export default {
	title: 'Button',
};

export const ButtonStory = () => {
	return (
		<UIContainer style={{ width: 200 }} align="center">
			<Button type="primary">Основная кнопка</Button>
			<Button type="secondary">Дополнительная кнопка</Button>
		</UIContainer>
	);
};
